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
    question: "A company needs to evaluate its AWS environment and provide best practice recommendations in five categories: cost, performance, service limits, fault tolerance and security. Which AWS service can the company use to meet these requirements?",
    options: [
      "AWS Shield",
      "AWS WAF",
      "AWS Trusted Advisor",
      "AWS Service Catalog"
    ],
    correctAnswer: 3,
    type: "single"
  },
  {
    id: 2,
    question: "Which tasks are the customer's responsibility, according to the AWS shared responsibility model? (Choose two.)",
    options: [
      "Establish the global infrastructure",
      "Perform client-side data encryption",
      "Configure IAM credentials",
      "Secure edge locations",
      "Patch Amazon RDS DB instances"
    ],
    correctAnswer: [2, 3],
    type: "multiple",
    maxSelections: 2
  },
  {
    id: 3,
    question: "How does AWS Cloud computing help businesses reduce costs? (Choose two.)",
    options: [
      "AWS charges the same prices for services in every AWS Region",
      "AWS enables capacity to be adjusted on demand",
      "AWS offers discounts for Amazon EC2 instances that remain idle for more than 1 week",
      "AWS does not charge for data sent from the AWS Cloud to the internet",
      "AWS eliminates many of the costs of building and maintaining on-premises data centers"
    ],
    correctAnswer: [2, 5],
    type: "multiple",
    maxSelections: 2
  },
  {
    id: 4,
    question: "A company wants to establish a schedule for rotating database user credentials. Which AWS service will support this requirement with the LEAST amount of operational overhead?",
    options: [
      "AWS Systems Manager",
      "AWS Secrets Manager",
      "AWS License Manager",
      "AWS Managed Services"
    ],
    correctAnswer: 2,
    type: "single"
  },
  {
    id: 5,
    question: "Which task is the customer's responsibility, according to the AWS shared responsibility model?",
    options: [
      "Maintain the security of the AWS Cloud",
      "Configure firewalls and networks",
      "Patch the operating system of Amazon RDS instances",
      "Implement physical and environmental controls"
    ],
    correctAnswer: 2,
    type: "single"
  },
  {
    id: 6,
    question: "A company has a set of ecommerce applications. The applications need to be able to send messages to each other. Which AWS service meets this requirement?",
    options: [
      "AWS Auto Scaling",
      "Elastic Load Balancing",
      "Amazon Simple Queue Service (Amazon SQS)",
      "Amazon Kinesis Data Streams"
    ],
    correctAnswer: 3,
    explanation: ["Amazon Simple Queue Service (SQS): SQS is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications. It allows one application to send messages to a queue, and another application to retrieve those messages from the queue. This can be helpful in scenarios where the sender and receiver are not required to interact with each other in real-time."],
    type: "single"
  },
  {
    id: 7,
    question: "A company wants to manage its AWS Cloud resources through a web interface. Which AWS service will meet this requirement?",
    options: [
      "AWS Management Console",
      "AWS CLI",
      "AWS SDK",
      "AWS Cloud9"
    ],
    correctAnswer: 1,
    type: "single"
  },
  {
    id: 8,
    question: "A company is assessing its AWS Business Support plan to determine if the plan still meets the company's needs. The company is considering switching to AWS Enterprise Support. Which additional benefit will the company receive with AWS Enterprise Support?",
    options: [
      "A full set of AWS Trusted Advisor checks",
      "Phone, email, and chat access to cloud support engineers 24 hours a day, 7 days a week",
      "A designated technical account manager (TAM) to assist in monitoring and optimization",
      "A consultative review and architecture guidance for the company's applications"
    ],
    correctAnswer: 3,
    type: "single"
  },
  {
    id: 9,
    question: "Which pricing model will interrupt a running Amazon EC2 instance if capacity becomes temporarily unavailable?",
    options: [
      "On-Demand Instances",
      "Standard Reserved Instances",
      "Spot Instances",
      "Convertible Reserved Instances"
    ],
    correctAnswer: 3,
    type: "single"
  },
  {
    id: 10,
    question: "Which options are AWS Cloud Adoption Framework (AWS CAF) security perspective capabilities? (Choose two.)",
    options: [
      "Observability",
      "Incident and problem management",
      "Incident response",
      "Infrastructure protection",
      "Availability and continuity"
    ],
    correctAnswer: [3, 4],
    type: "multiple",
    maxSelections: 2
  },
  {
    id: 11,
    question: "A company wants to run its workload on Amazon EC2 instances for more than 1 year. This workload will run continuously. Which option offers a discounted hourly rate compared to the hourly rate of On-Demand Instances?",
    options: [
      "AWS Graviton processor",
      "Dedicated Hosts",
      "EC2 Instance Savings Plans",
      "Amazon EC2 Auto Scaling instances"
    ],
    correctAnswer: 3,
    type: "single"
  },
  {
    id: 12,
    question: "Which characteristic of the AWS Cloud helps users eliminate underutilized CPU capacity?",
    options: [
      "Agility",
      "Elasticity",
      "Reliability",
      "Durability"
    ],
    correctAnswer: 2,
    type: "single"
  },
  {
    id: 13,
    question: "Which AWS services can a company use to achieve a loosely coupled architecture? (Choose two.)",
    options: [
      "Amazon WorkSpaces",
      "Amazon Simple Queue Service (Amazon SQS)",
      "Amazon Connect",
      "AWS Trusted Advisor",
      "AWS Step Functions"
    ],
    correctAnswer: [2, 5],
    explanation: ["B. Amazon Simple Queue Service (Amazon SQS): SQS is a fully managed message queuing service that enables decoupling of the components in a distributed system. It allows components to communicate asynchronously, promoting loose coupling.", "E. AWS Step Functions: Step Functions is a serverless function orchestrator that allows you to coordinate multiple AWS services into serverless workflows. It helps in creating loosely coupled, flexible systems by defining workflows that connect various services."],
    type: "multiple",
    maxSelections: 2
  },
  {
    id: 14,
    question: "Which AWS Cloud service can send alerts to customers if custom spending thresholds are exceeded?",
    options: [
      "AWS Budgets",
      "AWS Cost Explorer",
      "AWS Cost Allocation Tags",
      "AWS Organizations"
    ],
    correctAnswer: 1,
    explanation: ["A. AWS Budgets is the AWS Cloud service that allows users to set custom spending thresholds and receive alerts when those thresholds are exceeded. It helps users to keep track of their AWS spending by providing notifications based on their budget limits."],
    type: "single"
  },
  {
    id: 15,
    question: "A company plans to migrate to the AWS Cloud. The company wants to use the AWS Cloud Adoption Framework (AWS CAF) to define and track business outcomes as part of its cloud transformation journey. Which AWS CAF governance perspective capability will meet these requirements?",
    options: [
      "Benefits management",
      "Risk management",
      "Application portfolio management",
      "Cloud financial management"
    ],
    correctAnswer: 1,
    explanation: ["Benefits management – Ensure that the business benefits associated with your cloud investments are realized and sustained. The success of your transformation is determined by the resulting business benefits. Clear identification of the desired benefits upfront will allow you to prioritize your cloud investments and track transformation progress over time."],
    type: "single"
  },
  {
    id: 16,
    question: "A company needs to quickly and securely move files over long distances between its client and an Amazon S3 bucket. Which S3 feature will meet this requirement?",
    options: [
      "S3 Versioning",
      "S3 Transfer Acceleration",
      "S3 ACLs",
      "S3 Intelligent-Tiering"
    ],
    correctAnswer: 2,
    explanation: ["S3 Transfer Acceleration is a feature that utilizes Amazon CloudFront's globally distributed edge locations to accelerate the upload of objects to an S3 bucket. It optimizes data transfer by using Amazon's backbone network, reducing latency and improving speeds when transferring files over long distances."],
    type: "single"
  },
  {
    id: 17,
    question: "A company needs to continuously run an experimental workload on an Amazon EC2 instance and stop the instance after 12 hours. Which instance purchasing option will meet this requirement MOST cost-effectively?",
    options: [
      "On-Demand Instances",
      "Reserved Instances",
      "Spot Instances",
      "Dedicated Instances"
    ],
    correctAnswer: 1,
    type: "single"
  },
  {
    id: 18,
    question: "Which cloud transformation journey phase of the AWS Cloud Adoption Framework (AWS CAF) focuses on demonstrating how the cloud helps accelerate business outcomes?",
    options: [
      "Scale",
      "Envision",
      "Align",
      "Launch"
    ],
    correctAnswer: 2,
    type: "single"
  },
  {
    id: 19,
    question: "Which option is a customer responsibility under the AWS shared responsibility model?",
    options: [
      "Maintenance of underlying hardware of Amazon EC2 instances",
      "Application data security",
      "Physical security of data centers",
      "Maintenance of VPC components"
    ],
    correctAnswer: 2,
    type: "single"
  },
  {
    id: 20,
    question: "A company wants its Amazon EC2 instances to operate in a highly available environment, even if there is a natural disaster in a particular geographic area. Which approach will achieve this goal?",
    options: [
      "Use EC2 instances in multiple AWS Regions",
      "Use EC2 instances in multiple Amazon CloudFront locations",
      "Use EC2 instances in multiple edge locations",
      "Use EC2 instances in AWS Local Zones"
    ],
    correctAnswer: 1,
    type: "single"
  },
  {
    id: 21,
    question: "A company wants to modernize and convert a monolithic application into microservices. The company wants to move the application to AWS. Which migration strategy should the company use?",
    options: [
      "Rehost",
      "Replatform",
      "Repurchase",
      "Refactor"
    ],
    correctAnswer: 4,
    explanation: ["Lift and shift—moving applications to the cloud as-is. This is also sometimes referred to as rehosting. Refactor—modifying applications to better support the cloud environment. Replatform—moving applications to the cloud without major changes, but taking advantage of benefits of the cloud environment. Rebuild—rewrite the application from scratch. Replace—retire the application and replace it with a new cloud-native application."],
    type: "single"
  },
  {
    id: 22,
    question: "A systems administrator created a new IAM user for a developer and assigned the user an access key instead of a user name and password. What is the access key used for?",
    options: [
      "To access the AWS account as the AWS account root user",
      "To access the AWS account through the AWS Management Console",
      "To access the AWS account through a CLI",
      "To access all of a company's AWS accounts"
    ],
    correctAnswer: 3,
    type: "single"
  },
  {
    id: 23,
    question: "A company has an application with robust hardware requirements. The application must be accessed by students who are using lightweight, low-cost laptops. Which AWS service will help the company deploy the application without investing in backend infrastructure or high-end client hardware?",
    options: [
      "Amazon AppStream 2.0",
      "AWS AppSync",
      "Amazon WorkLink",
      "AWS Elastic Beanstalk"
    ],
    correctAnswer: 1,
    type: "single"
  },
  {
    id: 24,
    question: "Which of the following is a recommended design principle for AWS Cloud architecture?",
    options: [
      "Design tightly coupled components",
      "Build a single application component that can handle all the application functionality",
      "Make large changes on fewer iterations to reduce chances of failure",
      "Avoid monolithic architecture by segmenting workloads"
    ],
    correctAnswer: 4,
    type: "single"
  },
  {
    id: 25,
    question: "A user wants to securely automate the management and rotation of credentials that are shared between applications, while spending the least amount of time on managing tasks. Which AWS service or feature can be used to accomplish this?",
    options: [
      "AWS CloudHSM",
      "AWS Key Management Service (AWS KMS)",
      "AWS Secrets Manager",
      "Server-side encryption"
    ],
    correctAnswer: 3,
    explanation: ["AWS Secrets Manager makes it easier to rotate, manage, and retrieve database credentials, API keys, and other secrets throughout their lifecycle."],
    type: "single"
  },
  {
    id: 26,
    question: "Which actions are best practices for an AWS account root user? (Choose two.)",
    options: [
      "Share root user credentials with team members",
      "Create multiple root users for the account, separated by environment",
      "Enable multi-factor authentication (MFA) on the root user",
      "Create an IAM user with administrator privileges for daily administrative tasks, instead of using the root user",
      "Use programmatic access instead of the root user and password"
    ],
    correctAnswer: [3, 4],
    type: "multiple",
    maxSelections: 2
  },
  {
    id: 27,
    question: "A company is running a critical workload on an Amazon RDS DB instance. The company needs the DB instance to be highly available with a recovery time of less than 5 minutes. Which solution will meet these requirements?",
    options: [
      "Create a read replica of the DB instance",
      "Create a template of the DB instance by using AWS CloudFormation",
      "Take frequent snapshots of the DB instance. Store the snapshots in Amazon S3",
      "Modify the DB instance to be a Multi-AZ deployment"
    ],
    correctAnswer: 4,
    type: "single"
  },
  {
    id: 28,
    question: "A company plans to migrate its application to AWS and run the application on Amazon EC2 instances. The application will have continuous usage for 1 year. Which EC2 instance purchasing option will meet these requirements MOST cost-effectively?",
    options: [
      "Reserved Instances",
      "Spot Instances",
      "On-Demand Instances",
      "Dedicated Hosts"
    ],
    correctAnswer: 1,
    type: "single"
  },
  {
    id: 29,
    question: "A company needs to transfer data between an Amazon S3 bucket and an on-premises application. Who is responsible for the security of this data, according to the AWS shared responsibility model?",
    options: [
      "The company",
      "AWS",
      "Firewall vendor",
      "AWS Marketplace partner"
    ],
    correctAnswer: 1,
    type: "single"
  },
  {
    id: 30,
    question: "Which pillar of the AWS Well-Architected Framework refers to the ability of a system to recover from infrastructure or service disruptions and dynamically acquire computing resources to meet demand?",
    options: [
      "Security",
      "Reliability",
      "Performance efficiency",
      "Cost optimization"
    ],
    correctAnswer: 2,
    type: "single"
  },
  {
    id: 31,
    question: "A company wants to identify Amazon S3 buckets that are shared with another AWS account. Which AWS service or feature will meet these requirements?",
    options: [
      "AWS Lake Formation",
      "IAM credential report",
      "Amazon CloudWatch",
      "IAM Access Analyzer"
    ],
    correctAnswer: 4,
    type: "single"
  },
  {
    id: 32,
    question: "Which AWS service gives users the ability to build interactive business intelligence dashboards that include machine learning insights?",
    options: [
      "Amazon Athena",
      "Amazon Kendra",
      "Amazon QuickSight",
      "Amazon Redshift"
    ],
    correctAnswer: 3,
    type: "single"
  },
  {
    id: 33,
    question: "A company needs a central user portal so that users can log in to third-party business applications that support Security Assertion Markup Language (SAML) 2.0. Which AWS service will meet this requirement?",
    options: [
      "AWS Identity and Access Management (IAM)",
      "Amazon Cognito",
      "AWS IAM Identity Center (AWS Single Sign-On)",
      "AWS CLI"
    ],
    correctAnswer: 2,
    explanation: ["B. AWS Cognito is correct answer. The user wants to login to THIRD PARTY APPLICATION Not to AWS SERVICES. Definition of Cognito - Amazon Cognito supports authentication with identity providers (IdPs) through Security Assertion Markup Language 2.0 (SAML 2.0). You can use an IdP that supports SAML with Amazon Cognito to provide a simple onboarding flow for your users."],
    type: "single"
  },
  {
    id: 34,
    question: "Which AWS service should users use to learn about AWS service availability and operations?",
    options: [
      "Amazon EventBridge",
      "AWS Service Catalog",
      "AWS Control Tower",
      "AWS Health Dashboard"
    ],
    correctAnswer: 4,
    type: "single"
  },
  {
    id: 35,
    question: "What is the customer ALWAYS responsible for managing, according to the AWS shared responsibility model?",
    options: [
      "Software licenses",
      "Networking",
      "Customer data",
      "Encryption keys"
    ],
    correctAnswer: 3,
    type: "single"
  },
  {
    id: 36,
    question: "Which AWS service enables users to check for vulnerabilities on Amazon EC2 instances by using predefined assessment templates?",
    options: [
      "AWS WAF",
      "AWS Trusted Advisor",
      "Amazon Inspector",
      "AWS Shield"
    ],
    correctAnswer: 3,
    type: "single"
  },
  {
    id: 37,
    question: "A company plans to migrate to the AWS Cloud. The company is gathering information about its on-premises infrastructure and requires information such as the hostname, IP address, and MAC address. Which AWS service will meet these requirements?",
    options: [
      "AWS DataSync",
      "AWS Application Migration Service",
      "AWS Application Discovery Service",
      "AWS Database Migration Service (AWS DMS)"
    ],
    correctAnswer: 3,
    explanation: ["AWS Application Discovery Service collects both server and database configuration information. Server information includes hostnames, IP addresses, MAC addresses, as well as the resource allocation and utilization details of key resources such as CPU, network, memory, and disk."],
    type: "single"
  },
  {
    id: 38,
    question: "A company is planning to migrate its application to the AWS Cloud. Which AWS tool or set of resources should the company use to analyze and assess its readiness for migration?",
    options: [
      "AWS Cloud Adoption Framework (AWS CAF)",
      "AWS Pricing Calculator",
      "AWS Well-Architected Framework",
      "AWS Budgets"
    ],
    correctAnswer: 3,
    explanation: ["AWS Well-Architected Framework focuses on the architectural best practices than on organizational readiness for cloud adoption."],
    type: "single"
  },
  {
    id: 39,
    question: "Which AWS services or features enable users to connect on-premises networks to a VPC? (Choose two.)",
    options: [
      "AWS VPN",
      "Elastic Load Balancing",
      "AWS Direct Connect",
      "VPC peering",
      "Amazon CloudFront"
    ],
    correctAnswer: [1, 3],
    type: "multiple",
    maxSelections: 2
  },
  {
    id: 40,
    question: "A user needs to quickly deploy a nonrelational database on AWS. The user does not want to manage the underlying hardware or the database software. Which AWS service can be used to accomplish this?",
    options: [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon Aurora",
      "Amazon Redshift"
    ],
    correctAnswer: 2,
    type: "single"
  },
  {
    id: 41,
    question: "Which actions are examples of a company's effort to rightsize its AWS resources to control cloud costs? (Choose two.)",
    options: [
      "Switch from Amazon RDS to Amazon DynamoDB to accommodate NoSQL datasets",
      "Base the selection of Amazon EC2 instance types on past utilization patterns",
      "Use Amazon S3 Lifecycle policies to move objects that users access infrequently to lower-cost storage tiers",
      "Use Multi-AZ deployments for Amazon RDS",
      "Replace existing Amazon EC2 instances with AWS Elastic Beanstalk"
    ],
    correctAnswer: [2, 3],
    type: "multiple",
    maxSelections: 2
  },
  {
    id: 42,
    question: "Which design principles support the reliability pillar of the AWS Well-Architected Framework? (Choose two.)",
    options: [
      "Perform operations as code",
      "Enable traceability",
      "Automatically scale to meet demand",
      "Deploy resources globally to improve response time",
      "Automatically recover from failure"
    ],
    correctAnswer: [3, 5],
    type: "multiple",
    maxSelections: 2
  },
  {
    id: 43,
    question: "A company that uses AWS needs to transfer 2 TB of data. Which type of transfer of that data would result in no cost for the company?",
    options: [
      "Inbound data transfer from the internet",
      "Outbound data transfer to the internet",
      "Data transfer between AWS Regions",
      "Data transfer between Availability Zones"
    ],
    correctAnswer: 1,
    explanation: ["There is no charge for inbound data transfer across all services in all Regions."],
    type: "single"
  },
  {
    id: 44,
    question: "A user has limited knowledge of AWS services, but wants to quickly deploy a scalable Node.js application in the AWS Cloud. Which service should be used to deploy the application?",
    options: [
      "AWS CloudFormation",
      "AWS Elastic Beanstalk",
      "Amazon EC2",
      "AWS OpsWorks"
    ],
    correctAnswer: 2,
    type: "single"
  },
  {
    id: 45,
    question: "A company needs to centrally configure and manage Amazon VPC security groups across multiple AWS accounts within an organization in AWS Organizations. Which AWS service should the company use to meet these requirements?",
    options: [
      "AWS Firewall Manager",
      "Amazon GuardDuty",
      "Amazon Detective",
      "AWS WAF"
    ],
    correctAnswer: 1,
    type: "single"
  },
  {
    id: 46,
    question: "Which task is a responsibility of AWS, according to the AWS shared responsibility model?",
    options: [
      "Configure identity and access management for applications",
      "Manage encryption options for data that is stored on AWS",
      "Configure security groups for Amazon EC2 instances",
      "Maintain the physical hardware of the infrastructure"
    ],
    correctAnswer: 4,
    type: "single"
  },
  {
    id: 47,
    question: "A company has an Amazon EC2 instance in a private subnet. The company wants to initiate a connection to the internet to pull operating system updates while preventing traffic from the internet from accessing the EC2 instance. Which AWS managed service allows this?",
    options: [
      "VPC endpoint",
      "NAT gateway",
      "Amazon PrivateLink",
      "VPC peering"
    ],
    correctAnswer: 2,
    type: "single"
  },
  {
    id: 48,
    question: "A company is storing data that will not be frequently accessed in the AWS Cloud. If the company needs to access the data, the data needs to be retrieved within 12 hours. The company wants a solution that is cost-effective for storage costs for each gigabyte. Which Amazon S3 storage class will meet these requirements?",
    options: [
      "S3 Standard",
      "S3 Glacier Flexible Retrieval",
      "S3 One Zone-Infrequent Access (S3 One Zone-IA)",
      "S3 Standard-Infrequent Access (S3 Standard-IA)"
    ],
    correctAnswer: 2,
    explanation: ["Amazon S3 Glacier Flexible Retrieval (formerly Amazon S3 Glacier): Expedited (1 to 5 minutes), Standard (3 to 5 hours), Bulk (5 to 12 hours) – free"],
    type: "single"
  },
  {
    id: 49,
    question: "Which actions are the responsibility of AWS, according to the AWS shared responsibility model? (Choose two.)",
    options: [
      "Securing the virtualization layer",
      "Patching the operating system on Amazon EC2 instances",
      "Enforcing a strict password policy for IAM users",
      "Patching the operating system on Amazon RDS instances",
      "Configuring security groups and network ACLs"
    ],
    correctAnswer: [1, 4],
    type: "multiple",
    maxSelections: 2
  },
  {
    id: 50,
    question: "A company needs to engage third-party consultants to help maintain and support its AWS environment and the company's business needs. Which AWS service or resource will meet these requirements?",
    options: [
      "AWS Support",
      "AWS Organizations",
      "AWS Service Catalog",
      "AWS Partner Network (APN)"
    ],
    correctAnswer: 4,
    type: "single"
  },
  {
    id: 51,
    question: "A company wants to create Amazon QuickSight dashboards every week by using its billing data. Which AWS feature or tool can the company use to meet these requirements?",
    options: [
      "AWS Budgets",
      "AWS Cost Explorer",
      "AWS Cost and Usage Report",
      "AWS Cost Anomaly Detection"
    ],
    correctAnswer: 3,
    type: "single"
  },
  {
    id: 52,
    question: "A company is planning to move data backups to the AWS Cloud. The company needs to replace on-premises storage with storage that is cloud-based but locally cached. Which AWS service meets these requirements?",
    options: [
      "AWS Storage Gateway",
      "AWS Snowcone",
      "AWS Backup",
      "Amazon Elastic File System (Amazon EFS)"
    ],
    correctAnswer: 1,
    type: "single"
  },
  {
    id: 53,
    question: "A company needs to plan, schedule, and run hundreds of thousands of computing jobs on AWS. Which AWS service can the company use to meet this requirement?",
    options: [
      "AWS Step Functions",
      "AWS Service Catalog",
      "Amazon Simple Queue Service (Amazon SQS)",
      "AWS Batch"
    ],
    correctAnswer: 4,
    type: "single"
  },
  {
    id: 54,
    question: "Which AWS services or features provide high availability and low latency by enabling failover across different AWS Regions? (Choose two.)",
    options: [
      "Amazon Route 53",
      "Network Load Balancer",
      "Amazon S3 Transfer Acceleration",
      "AWS Global Accelerator",
      "Application Load Balancer"
    ],
    correctAnswer: [1, 4],
    type: "multiple",
    maxSelections: 2
  },
  {
    id: 55,
    question: "Which of the following is a way to use Amazon EC2 Auto Scaling groups to scale capacity in the AWS Cloud?",
    options: [
      "Scale the number of EC2 instances in or out automatically, based on demand",
      "Use serverless EC2 instances",
      "Scale the size of EC2 instances up or down automatically, based on demand",
      "Transfer unused CPU resources between EC2 instances"
    ],
    correctAnswer: 1,
    type: "single"
  },
  {
    id: 56,
    question: "Which abilities are benefits of the AWS Cloud? (Choose two.)",
    options: [
      "Trade variable expenses for capital expenses",
      "Deploy globally in minutes",
      "Plan capacity in advance of deployments",
      "Take advantage of economies of scale",
      "Reduce dependencies on network connectivity"
    ],
    correctAnswer: [2, 4],
    type: "multiple",
    maxSelections: 2
  },
  {
    id: 57,
    question: "Which AWS security service protects applications from distributed denial of service attacks with always-on detection and automatic inline mitigations?",
    options: [
      "Amazon Inspector",
      "AWS Web Application Firewall (AWS WAF)",
      "Elastic Load Balancing (ELB)",
      "AWS Shield"
    ],
    correctAnswer: 4,
    type: "single"
  },
  {
    id: 58,
    question: "Which Amazon EC2 instance pricing model can provide discounts of up to 90%?",
    options: [
      "Reserved Instances",
      "On-Demand",
      "Dedicated Hosts",
      "Spot Instances"
    ],
    correctAnswer: 4,
    type: "single"
  },
  {
    id: 59,
    question: "Which of the following acts as an instance-level firewall to control inbound and outbound access?",
    options: [
      "Network access control list",
      "Security groups",
      "AWS Trusted Advisor",
      "Virtual private gateways"
    ],
    correctAnswer: 2,
    type: "single"
  },
  {
    id: 60,
    question: "A company has teams that have different job roles and responsibilities. The company's employees often change teams. The company needs to manage permissions for the employees so that the permissions are appropriate for the job responsibilities. Which IAM resource should the company use to meet this requirement with the LEAST operational overhead?",
    options: [
      "IAM user groups",
      "IAM roles",
      "IAM instance profiles",
      "IAM policies for individual users"
    ],
    correctAnswer: 2,
    type: "single"
  },
  {
    id: 61,
    question: "Which AWS service can a company use to securely store and encrypt passwords for a database?",
    options: [
      "AWS Shield",
      "AWS Secrets Manager",
      "AWS Identity and Access Management (IAM)",
      "Amazon Cognito"
    ],
    correctAnswer: 2,
    type: "single"
  },
  {
    id: 62,
    question: "What can a cloud practitioner use to retrieve AWS security and compliance documents and submit them as evidence to an auditor or regulator?",
    options: [
      "AWS Certificate Manager",
      "AWS Systems Manager",
      "AWS Artifact",
      "Amazon Inspector"
    ],
    correctAnswer: 3,
    type: "single"
  },
  {
    id: 63,
    question: "Which encryption types can be used to protect objects at rest in Amazon S3? (Choose two.)",
    options: [
      "Server-side encryption with Amazon S3 managed encryption keys (SSE-S3)",
      "Server-side encryption with AWS KMS managed keys (SSE-KMS)",
      "TLS",
      "SSL",
      "Transparent Data Encryption (TDE)"
    ],
    correctAnswer: [1, 2],
    type: "multiple",
    maxSelections: 2
  },
  {
    id: 64,
    question: "Which AWS service is used to track, record, and audit configuration changes made to AWS resources?",
    options: [
      "AWS Shield",
      "AWS Config",
      "AWS IAM",
      "Amazon Inspector"
    ],
    correctAnswer: 2,
    explanation: ["Helps with auditing and recording compliance of your AWS resources. Helps record configurations and changes over time"],
    type: "single"
  },
  {
    id: 65,
    question: "A customer runs an On-Demand Amazon Linux EC2 instance for 3 hours, 5 minutes, and 6 seconds. For how much time will the customer be billed?",
    options: [
      "3 hours, 5 minutes",
      "3 hours, 5 minutes, and 6 seconds",
      "3 hours, 6 minutes",
      "4 hours"
    ],
    correctAnswer: 2,
    type: "single"
  },
  {
    id: 66,
    question: "Which cloud concept is demonstrated by using AWS Compute Optimizer?",
    options: [
      "Security validation",
      "Rightsizing",
      "Elasticity",
      "Global reach"
    ],
    correctAnswer: 2,
    type: "single"
  },
  {
    id: 67,
    question: "Who enables encryption of data at rest for Amazon Elastic Block Store (Amazon EBS)?",
    options: [
      "AWS Support",
      "AWS customers",
      "AWS Key Management Service (AWS KMS)",
      "AWS Trusted Advisor"
    ],
    correctAnswer: 2,
    type: "single"
  },
  {
    id: 68,
    question: "Which AWS service or feature will search for and identify AWS resources that are shared externally?",
    options: [
      "Amazon OpenSearch Service",
      "AWS Control Tower",
      "AWS IAM Access Analyzer",
      "AWS Fargate"
    ],
    correctAnswer: 3,
    type: "single"
  },
  {
    id: 69,
    question: "At what support level do users receive access to a support concierge?",
    options: [
      "Basic Support",
      "Developer Support",
      "Business Support",
      "Enterprise Support"
    ],
    correctAnswer: 4,
    type: "single"
  },
  {
    id: 70,
    question: "Which AWS service can a company use to visually design and build serverless applications?",
    options: [
      "AWS Lambda",
      "AWS Batch",
      "AWS Application Composer",
      "AWS App Runner"
    ],
    correctAnswer: 3,
    explanation: ["AWS Application Composer helps you visually compose and configure AWS services into serverless applications backed by infrastructure as code."],
    type: "single"
  },
  {
    id: 71,
    question: "A company wants to migrate to AWS and use the same security software it uses on premises. The security software vendor offers its security software as a service on AWS. Where can the company purchase the security solution?",
    options: [
      "AWS Partner Solutions Finder",
      "AWS Support Center",
      "AWS Management Console",
      "AWS Marketplace"
    ],
    correctAnswer: 4,
    type: "single"
  },
  {
    id: 72,
    question: "A company that has AWS Enterprise Support is launching a new version of a popular product in 2 months. The company expects a large increase in traffic to its website. The website is hosted on Amazon EC2 instances. Which action should the company take to assess its readiness to scale for this launch?",
    options: [
      "Replace the EC2 instances with AWS Lambda functions",
      "Use AWS Infrastructure Event Management (IEM) support",
      "Submit a request on AWS Marketplace to monitor the event",
      "Review the coverage reports in the AWS Cost Management console"
    ],
    correctAnswer: 2,
    type: "single"
  },
  {
    id: 73,
    question: "A company wants a time-series database service that makes it easier to store and analyze trillions of events each day. Which AWS service will meet this requirement?",
    options: [
      "Amazon Neptune",
      "Amazon Timestream",
      "Amazon Forecast",
      "Amazon DocumentDB (with MongoDB compatibility)"
    ],
    correctAnswer: 2,
    explanation: ["Amazon Timestream is a fast, scalable, and serverless time-series database service that makes it easier to store and analyze trillions of events per day up to 1,000 times faster. Amazon Timestream automatically scales up or down to adjust capacity and performance, so that you don't have to manage the underlying infrastructure."],
    type: "single"
  },
  {
    id: 74,
    question: "Which option is a shared control between AWS and the customer, according to the AWS shared responsibility model?",
    options: [
      "Configuration management",
      "Physical and environmental controls",
      "Data integrity authentication",
      "Identity and access management"
    ],
    correctAnswer: 1,
    type: "single"
  },
  {
    id: 75,
    question: "A company has migrated its workloads to AWS. The company wants to adopt AWS at scale and operate more efficiently and securely. Which AWS service or framework should the company use for operational support?",
    options: [
      "AWS Support",
      "AWS Cloud Adoption Framework (AWS CAF)",
      "AWS Managed Services (AMS)",
      "AWS Well-Architected Framework"
    ],
    correctAnswer: 3,
    type: "single"
  },
  {
    id: 76,
    question: "A company is moving an on-premises data center to the AWS Cloud. The company must migrate 50 petabytes of file storage data to AWS with the least possible operational overhead. Which AWS service or resource should the company use to meet these requirements?",
    options: [
      "AWS Snowmobile",
      "AWS Snowball Edge",
      "AWS Data Exchange",
      "AWS Database Migration Service (AWS DMS)"
    ],
    correctAnswer: 1,
    type: "single"
  },
  {
    id: 77,
    question: "A company wants to query its server logs to gain insights about its customers' experiences. Which AWS service will store this data MOST cost-effectively?",
    options: [
      "Amazon Aurora",
      "Amazon Elastic File System (Amazon EFS)",
      "Amazon Elastic Block Store (Amazon EBS)",
      "Amazon S3"
    ],
    correctAnswer: 4,
    type: "single"
  },
  {
    id: 78,
    question: "Which AWS service helps users audit API activity across their AWS account?",
    options: [
      "AWS CloudTrail",
      "Amazon Inspector",
      "AWS WAF",
      "AWS Config"
    ],
    correctAnswer: 1,
    type: "single"
  },
  {
    id: 79,
    question: "A company wants to automatically add and remove Amazon EC2 instances. The company wants the EC2 instances to adjust to varying workloads dynamically. Which service or feature will meet these requirements?",
    options: [
      "Amazon DynamoDB",
      "Amazon EC2 Spot Instances",
      "AWS Snow Family",
      "Amazon EC2 Auto Scaling"
    ],
    correctAnswer: 4,
    type: "single"
  },
  {
    id: 80,
    question: "Which security service automatically recognizes and classifies sensitive data or intellectual property on AWS?",
    options: [
      "Amazon GuardDuty",
      "Amazon Macie",
      "Amazon Inspector",
      "AWS Shield"
    ],
    correctAnswer: 2,
    type: "single"
  },
  {
    id: 81,
    question: "Which AWS service or tool can be used to capture information about inbound and outbound traffic in an Amazon VPC?",
    options: [
      "VPC Flow Logs",
      "Amazon Inspector",
      "VPC endpoint services",
      "NAT gateway"
    ],
    correctAnswer: 1,
    type: "single"
  },
  {
    id: 82,
    question: "Which AWS service or feature can a company use to apply security rules to specific Amazon EC2 instances?",
    options: [
      "Network ACLs",
      "Security groups",
      "AWS Trusted Advisor",
      "AWS WAF"
    ],
    correctAnswer: 2,
    type: "single"
  },
  {
    id: 83,
    question: "A company is building an application that requires the ability to send, store, and receive messages between application components. The company has another requirement to process messages in first-in, first-out (FIFO) order. Which AWS service should the company use?",
    options: [
      "AWS Step Functions",
      "Amazon Simple Notification Service (Amazon SNS)",
      "Amazon Kinesis Data Streams",
      "Amazon Simple Queue Service (Amazon SQS)"
    ],
    correctAnswer: 4,
    explanation: ["Amazon SQS FIFO queues preserve the order in which messages are sent and received, and avoid that a message is processed more than once. This ensures that the messages are processed in first-in, first-out (FIFO) order."],
    type: "single"
  },
  {
    id: 84,
    question: "A company has a fleet of cargo ships. The cargo ships have sensors that collect data at sea, where there is intermittent or no internet connectivity. The company needs to collect, format, and process the data at sea and move the data to AWS later. Which AWS service should the company use to meet these requirements?",
    options: [
      "AWS IoT Core",
      "Amazon Lightsail",
      "AWS Storage Gateway",
      "AWS Snowball Edge"
    ],
    correctAnswer: 4,
    explanation: ["AWS Snowball Edge is a type of Snowball device with on-board storage and compute power for select AWS capabilities"],
    type: "single"
  },
  {
    id: 85,
    question: "A company hosts an application on multiple Amazon EC2 instances. The application uses Amazon Simple Notification Service (Amazon SNS) to send messages. Which AWS service or feature will give the application permission to access required AWS services?",
    options: [
      "AWS Certificate Manager (ACM)",
      "IAM roles",
      "AWS Security Hub",
      "Amazon GuardDuty"
    ],
    correctAnswer: 2,
    type: "single"
  },
  {
    id: 86,
    question: "Which AWS service allows users to model and provision AWS resources using common programming languages?",
    options: [
      "AWS CloudFormation",
      "AWS CodePipeline",
      "AWS Cloud Development Kit (AWS CDK)",
      "AWS Systems Manager"
    ],
    correctAnswer: 3,
    explanation: ["The AWS Cloud Development Kit (AWS CDK) is a software development framework that allows users to define cloud infrastructure using familiar programming languages such as TypeScript, Python, Java, and C#. It enables you to model and provision AWS resources using code, making it easier to manage and automate your infrastructure."],
    type: "single"
  },
  {
    id: 87,
    question: "A company wants to integrate its online shopping website with social media login credentials. Which AWS service can the company use to make this integration?",
    options: [
      "AWS Directory Service",
      "AWS Identity and Access Management (IAM)",
      "Amazon Cognito",
      "AWS IAM Identity Center (AWS Single Sign-On)"
    ],
    correctAnswer: 3,
    explanation: ["Cognito provides user authentication, authorization, and management for web and mobile applications. It includes features specifically designed for integrating social media logins (such as Facebook, Google, or Amazon) into applications, making it easier to manage user identities from various sources."],
    type: "single"
  },
  {
    id: 88,
    question: "A company needs to migrate a PostgreSQL database from on-premises to Amazon RDS. Which AWS service or tool should the company use to meet this requirement?",
    options: [
      "Cloud Adoption Readiness Tool",
      "AWS Migration Hub",
      "AWS Database Migration Service (AWS DMS)",
      "AWS Application Migration Service"
    ],
    correctAnswer: 3,
    explanation: ["AWS Database Migration Service (AWS DMS) is a managed migration and replication service that helps you move your databases and analytics workloads to AWS quickly and securely."],
    type: "single"
  },
  {
    id: 89,
    question: "A company has deployed an Amazon EC2 instance. Which option is an AWS responsibility under the AWS shared responsibility model?",
    options: [
      "Managing and encrypting application data",
      "Installing updates and security patches of guest operating system",
      "Configuration of infrastructure devices",
      "Configuration of security groups on each instance"
    ],
    correctAnswer: 3,
    type: "single"
  },
  {
    id: 90,
    question: "A company wants to migrate its PostgreSQL database to AWS. The company does not use the database frequently. Which AWS service or resource will meet these requirements with the LEAST management overhead?",
    options: [
      "PostgreSQL on Amazon EC2",
      "Amazon RDS for PostgreSQL",
      "Amazon Aurora PostgreSQL-Compatible Edition",
      "Amazon Aurora Serverless"
    ],
    correctAnswer: 4,
    type: "single"
  },
  {
    id: 91,
    question: "A company wants to store data in Amazon S3. The company rarely access the data, and the data can be regenerated if necessary. The company wants to store the data in the most cost-effective storage class. Which S3 storage class will meet this requirement?",
    options: [
      "S3 Standard",
      "S3 Intelligent-Tiering",
      "S3 Standard-Infrequent Access (S3 Standard-IA)",
      "S3 One Zone-Infrequent Access (S3 One Zone-IA)"
    ],
    correctAnswer: 4,
    type: "single"
  }
];

export { sampleQuestions };
export type { Question };