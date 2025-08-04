"use client"

import type React from "react"

import { useState } from "react"
import { Upload, FileText, Eye, EyeOff, CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { sampleQuestions } from "@/data"

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number | number[] // Can be single number or array for multi-select
  explanation?: string[]
  wrongexplanation?: string[]
  type: "single" | "multiple" // Add question type
  maxSelections?: number // For multi-select questions
}

export default function QuizExtractor() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [questions, setQuestions] = useState<Question[]>([])
  const [revealedAnswers, setRevealedAnswers] = useState<Set<number>>(new Set())
  const [userAnswers, setUserAnswers] = useState<Record<number, number | number[]>>({})
  const [isProcessing, setIsProcessing] = useState(false)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setUploadedFile(file)
    
  }
}
const startSession = () => {
    processDocument()
  }
  const processDocument = async () => {
    setIsProcessing(true)
    // Simulate document processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // In a real app, you would send the file to a backend service
    // that uses OCR, NLP, or document parsing to extract questions
    setQuestions(sampleQuestions)
    setIsProcessing(false)
  }

  const handleAnswerSelection = (
    questionId: number,
    optionIndex: number,
    questionType: "single" | "multiple",
    maxSelections?: number,
  ) => {
    setUserAnswers((prev) => {
      const currentAnswer = prev[questionId]

      if (questionType === "single") {
        // For single select, replace the answer
        return { ...prev, [questionId]: optionIndex }
      } else {
        // For multiple select
        const currentSelections = Array.isArray(currentAnswer) ? currentAnswer : []

        if (currentSelections.includes(optionIndex)) {
          // Remove if already selected
          return { ...prev, [questionId]: currentSelections.filter((i) => i !== optionIndex) }
        } else {
          // Add if not selected and under limit
          if (maxSelections && currentSelections.length >= maxSelections) {
            return prev // Don't add if at max selections
          }
          return { ...prev, [questionId]: [...currentSelections, optionIndex] }
        }
      }
    })
  }

  const toggleAnswer = (questionId: number) => {
    const newRevealed = new Set(revealedAnswers)
    if (newRevealed.has(questionId)) {
      newRevealed.delete(questionId)
    } else {
      newRevealed.add(questionId)
    }
    setRevealedAnswers(newRevealed)
  }

  const revealAllAnswers = () => {
    setRevealedAnswers(new Set(questions.map((q) => q.id)))
  }

  const hideAllAnswers = () => {
    setRevealedAnswers(new Set())
  }

  const clearAllAnswers = () => {
    setUserAnswers({})
  }

  const isOptionSelected = (questionId: number, optionIndex: number, questionType: "single" | "multiple") => {
    const userAnswer = userAnswers[questionId]
    if (questionType === "single") {
      return userAnswer === optionIndex
    } else {
      return Array.isArray(userAnswer) && userAnswer.includes(optionIndex)
    }
  }

  const isAnswerCorrect = (questionId: number) => {
    const userAnswer = userAnswers[questionId]
    const question = questions.find((q) => q.id === questionId)
    if (!question || userAnswer === undefined) return false

    if (question.type === "single") {
      // Convert 1-indexed correctAnswer to 0-indexed for comparison
      return userAnswer === (question.correctAnswer as number) - 1
    } else {
      // Convert 1-indexed correctAnswers to 0-indexed for comparison
      const correctAnswers = Array.isArray(question.correctAnswer) 
        ? question.correctAnswer.map(answer => answer - 1)
        : [(question.correctAnswer as number) - 1]
      const userSelections = Array.isArray(userAnswer) ? userAnswer : [userAnswer]

      return (
        correctAnswers.length === userSelections.length &&
        correctAnswers.every((answer) => userSelections.includes(answer))
      )
    }
  }

  const getAnswerStatus = (questionId: number, optionIndex: number) => {
    const question = questions.find((q) => q.id === questionId)
    if (!question || !revealedAnswers.has(questionId)) return null

    // Convert 1-indexed correctAnswer to 0-indexed for comparison
    const isCorrectOption = Array.isArray(question.correctAnswer)
      ? question.correctAnswer.map(answer => answer - 1).includes(optionIndex)
      : (question.correctAnswer as number) - 1 === optionIndex

    const isUserSelected = isOptionSelected(questionId, optionIndex, question.type)

    if (isCorrectOption && isUserSelected) return "correct-selected"
    if (isCorrectOption && !isUserSelected) return "correct-unselected"
    if (!isCorrectOption && isUserSelected) return "incorrect-selected"
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Quiz Document Extractor</h1>
          <p className="text-gray-600">Upload a document to extract multiple choice questions and answers</p>
          <Button onClick={startSession} className="mt-2">Start</Button>
        </div>

        {/* File Upload Section
        {uploadedFile && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="w-5 h-5" />
                Upload Document
              </CardTitle>
              <CardDescription>
                Upload a PDF, Word document, or text file containing multiple choice questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-lg font-medium text-gray-700 mb-2">Click to upload document</p>
                  <p className="text-sm text-gray-500">Supports PDF, DOC, DOCX, TXT files</p>
                </label>
              </div>
            </CardContent>
          </Card>
        )} */}

        {/* Processing State */}
        {isProcessing && (
          <Card className="mb-8">
            <CardContent className="p-8 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-lg font-medium">Getting Ready...</p>
              <p className="text-sm text-gray-500">Loading questions and answers</p>
            </CardContent>
          </Card>
        )}

        {/* File Info and Controls */}
       
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">
                      {questions.length} questions • {Object.keys(userAnswers).length} answered
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={clearAllAnswers}>
                    Clear Answers
                  </Button>
                  <Button variant="outline" size="sm" onClick={hideAllAnswers}>
                    <EyeOff className="w-4 h-4 mr-2" />
                    Hide All
                  </Button>
                  <Button variant="outline" size="sm" onClick={revealAllAnswers}>
                    <Eye className="w-4 h-4 mr-2" />
                    Reveal All
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
      

        {/* Questions List */}
        {questions.length > 0 && (
          <div className="space-y-6">
            {questions.map((question, index) => (
              <Card key={question.id} className="overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">Question {index + 1}</Badge>
                        {revealedAnswers.has(question.id) && userAnswers[question.id] !== undefined && (
                          <Badge variant={isAnswerCorrect(question.id) ? "default" : "destructive"}>
                            {isAnswerCorrect(question.id) ? "Correct" : "Incorrect"}
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-lg font-medium leading-relaxed">{question.question}</h3>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => toggleAnswer(question.id)} className="shrink-0">
                      {revealedAnswers.has(question.id) ? (
                        <>
                          <EyeOff className="w-4 h-4 mr-2" />
                          Hide
                        </>
                      ) : (
                        <>
                          <Eye className="w-4 h-4 mr-2" />
                          Reveal
                        </>
                      )}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {question.type === "multiple" && (
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                        <p className="text-sm text-blue-800 font-medium">
                          📝 Multi-select question - Choose {question.maxSelections} answers
                        </p>
                      </div>
                    )}
                    {question.options.map((option, optionIndex) => {
                      const isSelected = isOptionSelected(question.id, optionIndex, question.type)
                      const answerStatus = getAnswerStatus(question.id, optionIndex)

                      let optionClasses = "p-3 rounded-lg border transition-all cursor-pointer hover:bg-gray-100 "

                      if (revealedAnswers.has(question.id)) {
                        switch (answerStatus) {
                          case "correct-selected":
                            optionClasses += "bg-green-50 border-green-200 hover:bg-green-100"
                            break
                          case "correct-unselected":
                            optionClasses += "bg-green-50 border-green-200"
                            break
                          case "incorrect-selected":
                            optionClasses += "bg-red-50 border-red-200 hover:bg-red-100"
                            break
                          default:
                            optionClasses += isSelected ? "bg-blue-50 border-blue-200" : "bg-gray-50 border-gray-200"
                        }
                      } else {
                        optionClasses += isSelected ? "bg-blue-50 border-blue-200" : "bg-gray-50 border-gray-200"
                      }

                      return (
                        <div
                          key={optionIndex}
                          className={optionClasses}
                          onClick={() =>
                            handleAnswerSelection(question.id, optionIndex, question.type, question.maxSelections)
                          }
                        >
                          <div className="flex items-center gap-3">
                            <span
                              className={`flex items-center justify-center w-6 h-6 text-sm font-medium transition-all ${
                                question.type === "multiple"
                                  ? `border-2 ${isSelected ? "border-blue-500 bg-blue-500 text-white" : "border-gray-400"}`
                                  : `rounded-full border ${isSelected ? "border-blue-500 bg-blue-500 text-white" : "bg-white border-gray-400"}`
                              }`}
                            >
                              {question.type === "multiple"
                                ? isSelected
                                  ? "✓"
                                  : ""
                                : isSelected
                                  ? "●"
                                  : String.fromCharCode(65 + optionIndex)}
                            </span>
                            <span className="flex-1">{option}</span>
                            {revealedAnswers.has(question.id) && (
                              <>
                                {answerStatus === "correct-selected" && (
                                  <CheckCircle className="w-5 h-5 text-green-600" />
                                )}
                                {answerStatus === "correct-unselected" && (
                                  <CheckCircle className="w-5 h-5 text-green-600" />
                                )}
                                {answerStatus === "incorrect-selected" && <XCircle className="w-5 h-5 text-red-600" />}
                              </>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {revealedAnswers.has(question.id) && question.explanation && (
                    <>
                      <Separator className="my-4" />
                      <h4 className="font-medium text-green-900 mb-2">Explanation</h4>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      {question.explanation.map((item:any, index)=> (
                        <p key={index} className="text-green-800 text-sm mb-1">{item}</p>
                      ))}
                      </div>
                    </>
                  )}
                  {revealedAnswers.has(question.id) && question.wrongexplanation && (
                    <>
                      <Separator className="my-4" />
                      <h4 className="font-medium text-red-900 mb-2">Let's briefly discuss why the other options may not be the best fit:</h4>
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      {question.wrongexplanation.map((item:any, index)=> (
                        <p key={index} className="text-red-800 text-sm mb-1">{item}</p>
                      ))}
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Empty State */}
        {uploadedFile && questions.length === 0 && !isProcessing && (
          <Card>
            <CardContent className="p-8 text-center">
              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-lg font-medium text-gray-700 mb-2">No questions found</p>
              <p className="text-sm text-gray-500">
                The document may not contain recognizable multiple choice questions
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
