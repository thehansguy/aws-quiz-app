interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number | number[]
  explanation?: string[]
  wrongexplanation?: string[]
  type: "single" | "multiple"
  maxSelections?: number
}

const sampleQuestions: Question[] = [
  {
    id: 1,
    question: "A company wants to rightsize its Amazon EC2 instances. Which configuration change will meet this requirement with the LEAST operational overhead?",
    options: [
      "A. Add EC2 instances in another Availability Zone.",
      "B. Change the size and type of the EC2 instances based on utilization.",
      "C. Convert the payment method from On-Demand to Savings Plans.",
      "D. Reprovision the EC2 instances with a larger instance"
    ],
    correctAnswer: 1,
    type: "single",
    explanation: [
      "Changing the size and type of EC2 instances based on utilization allows rightsizing with minimal operational overhead, as it can often be done with a simple stop, modify, and start operation."
    ]
  },
  {
    id: 2,
    question: "A company plans to host its data warehouse application on AWS. The company has a machine learning (ML) model and wants to use that model within its data warehouse for data forecasting. Which AWS service will meet these requirements?",
    options: [
      "A. Amazon DynamoDB",
      "B. Amazon Redshift ML",
      "C. Amazon Aurora ML",
      "D. Amazon MemoryDB for Redis"
    ],
    correctAnswer: 1,
    type: "single",
    explanation: [
      "Amazon Redshift ML allows you to create, train, and deploy machine learning models directly in your Redshift data warehouse for use in SQL queries."
    ]
  },
  {
    id: 3,
    question: "Which option is a pillar of the AWS Well-Architected Framework?",
    options: [
      "A. Patch management",
      "B. Cost optimization",
      "C. Business technology strategy",
      "D. Physical and environmental controls"
    ],
    correctAnswer: 1,
    type: "single",
    explanation: [
      "Cost optimization is one of the five pillars of the AWS Well-Architected Framework."
    ]
  },
  {
    id: 4,
    question: "Which of the following is a customer responsibility according to the AWS shared responsibility model?",
    options: [
      "A. Apply security patches for Amazon S3 infrastructure devices.",
      "B. Provide physical security for AWS datacenters.",
      "C. Install operating system updates on Lambda@Edge.",
      "D. Implement multi-factor authentication (MFA) for IAM user accounts."
    ],
    correctAnswer: 3,
    type: "single",
    explanation: [
      "Customers are responsible for managing IAM users and enabling MFA for their accounts."
    ]
  },
  {
    id: 5,
    question: "A company wants to migrate its applications to the AWS Cloud. The company plans to identify and prioritize any business transformation opportunities and evaluate its AWS Cloud readiness. Which AWS service or tool should the company use to meet these requirements?",
    options: [
      "A. AWS Cloud Adoption Framework (AWS CAF)",
      "B. AWS Managed Services (AMS)",
      "C. AWS Well-Architected Framework",
      "D. AWS Migration Hub"
    ],
    correctAnswer: 0,
    type: "single",
    explanation: [
      "AWS CAF helps organizations identify transformation opportunities and assess cloud readiness."
    ]
  },
  {
    id: 6,
    question: "Which AWS service provides a relational database management system that is fully compatible with MySQL and PostgreSQL?",
    options: [
      "A. Amazon DynamoDB",
      "B. Amazon Aurora",
      "C. Amazon Neptune",
      "D. Amazon Athena"
    ],
    correctAnswer: 1,
    type: "single",
    explanation: [
      "Amazon Aurora is a fully managed relational database compatible with MySQL and PostgreSQL."
    ]
  },
  {
    id: 7,
    question: "Which AWS service is always available free of charge to users?",
    options: [
      "A. Amazon Athena",
      "B. AWS Identity and Access Management (IAM)",
      "C. AWS Secrets Manager",
      "D. Amazon ElastiCache"
    ],
    correctAnswer: 1,
    type: "single",
    explanation: [
      "IAM is always available at no additional charge."
    ]
  },
  {
    id: 8,
    question: "A company is launching a critical business application in an AWS Region. How can the company increase resilience for this application?",
    options: [
      "A. Deploy a copy of the application in another AWS account.",
      "B. Deploy the application by using multiple VPCs.",
      "C. Deploy the application by using multiple subnets.",
      "D. Deploy the application by using multiple Availability Zones."
    ],
    correctAnswer: 3,
    type: "single",
    explanation: [
      "Deploying across multiple Availability Zones increases resilience and availability."
    ]
  },
  {
    id: 9,
    question: "A web developer wants to use machine learning to classify images that are uploaded to a website. Which AWS service or feature will meet these requirements?",
    options: [
      "A. Amazon Rekognition",
      "B. Amazon SageMaker Clarify",
      "C. Amazon Mechanical Turk",
      "D. Amazon Transcribe"
    ],
    correctAnswer: 0,
    type: "single",
    explanation: [
      "Amazon Rekognition provides image and video analysis, including image classification."
    ]
  },
  {
    id: 10,
    question: "Which options are AWS Cloud Adoption Framework (AWS CAF) perspectives? (Choose two.)",
    options: [
      "A. Cloud fluency",
      "B. Security",
      "C. Change acceleration",
      "D. Architecture",
      "E. Business"
    ],
    correctAnswer: [1, 4],
    type: "multiple",
    maxSelections: 2,
    explanation: [
      "Security and Business are two of the AWS CAF perspectives."
    ]
  },
  {
    id: 11,
    question: "A company is defining its AWS multi-account strategy. The company needs to control access to AWS services and needs to consolidate billing across accounts. Which AWS service should the company use to meet these requirements?",
    options: [
      "A. AWS Organizations",
      "B. AWS Identity and Access Management (IAM)",
      "C. AWS Billing and Cost Management",
      "D. Amazon Cognito"
    ],
    correctAnswer: 0,
    type: "single",
    explanation: [
      "AWS Organizations enables consolidated billing and centralized access control across accounts."
    ]
  },
  {
    id: 12,
    question: "Which options are common stakeholders for the AWS Cloud Adoption Framework (AWS CAF) platform perspective? (Choose two.)",
    options: [
      "A. Chief financial officers (CFOs)",
      "B. IT architects",
      "C. Chief information officers (CIOs)",
      "D. Chief data officers (CDOs)",
      "E. Engineers"
    ],
    correctAnswer: [1, 4],
    type: "multiple",
    maxSelections: 2,
    explanation: [
      "IT architects and engineers are common stakeholders for the platform perspective."
    ]
  }
]

export {sampleQuestions}