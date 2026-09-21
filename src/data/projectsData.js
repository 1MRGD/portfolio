export const projectsData = [
  {
    id: 'vehicle-rental',
    title: 'Vehicle Rental System',
    subtitle: 'Scalable Java & JDBC Enterprise Fleet & Booking Management System',
    category: 'Java & Backend',
    timeline: 'Academic Project • 2024',
    role: 'Lead Backend Developer & System Architect',
    status: 'Completed & Verified',
    description: 'Engineered a Java-based Vehicle Rental System managing booking, availability, and returns for 100+ users.',
    overview:
      'A comprehensive enterprise management system engineered to modernize vehicle rental operations. The platform automates fleet inventory tracking, reservation processing, customer identity records, and return billing pipelines through a robust relational architecture and object-oriented backend.',
    problemStatement:
      'Traditional vehicle rental businesses relied heavily on manual paperwork and disjointed spreadsheets. This caused frequent double-booking collisions, delayed availability updates, inaccurate late-fee calculations, and high administrative overhead during peak demand periods.',
    solution:
      'Engineered an ACID-compliant database architecture in MySQL connected via high-performance Java JDBC PreparedStatements. Designed modular service layers enforcing strict reservation validation, atomic state transitions (Available -> Booked -> In Service), and automated tariff and penalty calculators.',
    highlights: [
      'Implemented full CRUD operations and optimized database queries with JDBC PreparedStatement.',
      'Reduced manual record handling by 45% through automated booking reconciliation.',
      'Enhanced system efficiency by 35% via optimized backend logic and secure authentication.',
      'Built concurrent booking lock logic to prevent simultaneous duplicate bookings on the same fleet item.',
    ],
    metrics: [
      {
        label: 'Manual Effort Reduction',
        val: '-45%',
        desc: 'Streamlined booking workflow eliminated manual register entries and manual tallying.',
      },
      {
        label: 'System Efficiency Boost',
        val: '+35%',
        desc: 'Optimized SQL indexing and connection reuse significantly reduced response latency.',
      },
      {
        label: 'Concurrency Capacity',
        val: '100+ Users',
        desc: 'Stress-tested query execution and transaction handling under high multi-user rental load.',
      },
      {
        label: 'Data Accuracy',
        val: '99.9%',
        desc: 'Zero booking collisions achieved through ACID transaction controls and atomic states.',
      },
    ],
    architecture: [
      {
        tier: 'Presentation Layer',
        tech: 'Responsive Web UI / HTML5 & CSS3',
        role: 'Intuitive forms for reservation entry, customer onboarding, fleet filtering, and receipt generation.',
      },
      {
        tier: 'Business Logic Layer',
        tech: 'Core Java (OOP & Service Handlers)',
        role: 'Enforces reservation validation rules, rental duration constraints, tier pricing, and penalty calculations.',
      },
      {
        tier: 'Data Access Layer',
        tech: 'JDBC & PreparedStatement',
        role: 'Protects against SQL injection attacks, handles connection pooling, and runs parameterized transactions.',
      },
      {
        tier: 'Database Storage',
        tech: 'MySQL Relational Schema',
        role: 'Maintains normalized tables for Vehicles, Customers, Bookings, Returns, and Payments with foreign key integrity.',
      },
    ],
    features: [
      {
        title: 'Fleet Inventory & Category Management',
        desc: 'Categorizes vehicles across classes (Sedans, SUVs, Luxury) with individual rental rates, maintenance logs, and live operational status flags.',
      },
      {
        title: 'Real-Time Availability Engine',
        desc: 'Prevents double-booking by calculating date range overlaps and immediately locking vehicle records upon reservation confirmation.',
      },
      {
        title: 'Customer & Booking Management',
        desc: 'Secure customer record storage, rental history auditing, contact validation, and instant receipt generation upon checkout.',
      },
      {
        title: 'Billing & Automated Fine Calculator',
        desc: 'Calculates base rental fees, security deposits, fuel adjustments, and automated late penalty fees upon return processing.',
      },
      {
        title: 'Admin Operational Dashboard',
        desc: 'Gives fleet managers visibility into active rentals, upcoming returns, vehicle maintenance schedules, and daily revenue statistics.',
      },
    ],
    technologies: ['Java', 'JDBC', 'MySQL', 'HTML5', 'CSS3', 'OOP'],
    techStackDetails: [
      { name: 'Java', role: 'Core object-oriented backend programming and business rules engine' },
      { name: 'JDBC', role: 'Secure database connectivity, prepared statements, and transaction handling' },
      { name: 'MySQL', role: 'Relational data store with ACID guarantees and foreign key constraints' },
      { name: 'HTML5 / CSS3', role: 'Interface presentation, modern responsive layouts, and interactive forms' },
      { name: 'OOP Principles', role: 'Encapsulation, inheritance, and modular service patterns' },
    ],
    engineeringHighlights: [
      {
        title: 'SQL Injection Prevention',
        desc: 'Replaced legacy raw string queries with parameterized JDBC PreparedStatements across all DAO classes to ensure bulletproof data sanitization.',
      },
      {
        title: 'Atomic Transaction Rollbacks',
        desc: 'Implemented programmatic commit and rollback handling. If payment logging or receipt generation fails, the vehicle reservation is rolled back atomically.',
      },
      {
        title: 'Composite Indexing',
        desc: 'Created composite database indexes on (vehicle_id, rental_status, start_date) to accelerate availability queries by over 3x.',
      },
    ],
    github: 'https://github.com/1MRGD/Vehicle_Rental_System',
  },
  {
    id: 'qr-voting',
    title: 'QR Code–Based Secure Online Voting System',
    subtitle: 'Tamper-Resilient Ballot Architecture with Encrypted Dynamic QR Authentication',
    category: 'Java & Backend',
    timeline: 'Academic Capstone • 2025',
    role: 'Security Architect & Full Stack Java Engineer',
    status: 'Completed & Verified',
    description: 'Built and deployed a Java-based secure online voting system with QR code authentication.',
    overview:
      'A tamper-resistant digital voting architecture designed to guarantee election integrity in student councils and organizational elections. By integrating single-use cryptographic QR authentication tokens, the system protects voter confidentiality while making duplicate voting mathematically impossible.',
    problemStatement:
      'Conventional paper voting and rudimentary electronic voting portals suffer from severe vulnerabilities: voter impersonation, illicit credential sharing, duplicate ballot stuffing, and opaque ballot counting procedures that erode trust.',
    solution:
      'Implemented a two-tier verification workflow where each verified voter is issued an encrypted one-time QR code. When scanned at the voting terminal, the system validates the cryptographic token, unlocks a single-use voting session, records the ballot anonymously, and permanently invalidates the token in an atomic transaction.',
    highlights: [
      'Implemented QR verification, secure vote casting, and automated tamper-proof result tallying.',
      'Enhanced voting security and eliminated duplicate voting (100% duplicate prevention in test cases).',
      'Ensured voter anonymity while preserving complete auditability for electoral authorities.',
      'Built an administrative portal with real-time precinct telemetry and cryptographic verification.',
    ],
    metrics: [
      {
        label: 'Duplicate Prevention',
        val: '100% Verified',
        desc: 'Zero duplicate votes cast across all simulated concurrency and replay attacks.',
      },
      {
        label: 'Auth Method',
        val: 'QR Encryption',
        desc: 'One-time encrypted payload validated against authorized voter registry.',
      },
      {
        label: 'Data Integrity',
        val: 'ACID Compliant',
        desc: 'Ballot counting isolated from voter personal identification data.',
      },
      {
        label: 'Audit Verification',
        val: '100% Traceable',
        desc: 'Cryptographic receipt generated for post-election audit verification.',
      },
    ],
    architecture: [
      {
        tier: 'Authentication Gate',
        tech: 'ZXing QR Engine & Tokenizer',
        role: 'Generates and parses high-entropy encrypted QR payloads; binds voter session to a single ballot token.',
      },
      {
        tier: 'Ballot Anonymizer',
        tech: 'Core Java Cryptographic Provider',
        role: 'Decouples voter identity from the cast ballot to ensure voter privacy while recording a cryptographic audit receipt.',
      },
      {
        tier: 'Validation Service',
        tech: 'Stateful Session Validator',
        role: 'Checks token expiration, prevents replay attacks, and marks voter status as "Voted" atomically.',
      },
      {
        tier: 'Encrypted Tally Store',
        tech: 'MySQL Database Engine',
        role: 'Stores encrypted ballots in an append-only table structure with transaction isolation.',
      },
    ],
    features: [
      {
        title: 'Single-Use QR Generation & Scanner',
        desc: 'Generates dynamic, encrypted QR codes unique to each registered voter, decrypted on-the-fly during authentication.',
      },
      {
        title: 'Anti-Duplicate Ballot Lock',
        desc: 'Atomic database transactions enforce that a voter record flag flips to consumed before ballot insertion completes.',
      },
      {
        title: 'Anonymized Ballot Storage',
        desc: 'Voter registry and ballot records are maintained in isolated schemas to guarantee secret ballot privacy.',
      },
      {
        title: 'Real-Time Tally & Analytics',
        desc: 'Live vote aggregation engine provides election authorities with turnout statistics, precinct progress, and final tallies.',
      },
      {
        title: 'Audit Trail & Receipt Verification',
        desc: 'Generates a unique tracking hash for voters to independently verify their vote was counted without revealing their choice.',
      },
    ],
    technologies: ['Java', 'JDBC', 'MySQL', 'QR Code API', 'HTML5', 'CSS3'],
    techStackDetails: [
      { name: 'Java', role: 'Backend application logic, token generation, and secure session management' },
      { name: 'QR Code API (ZXing)', role: 'Cryptographic payload barcode encoding and optical scanning pipeline' },
      { name: 'JDBC', role: 'Transaction-isolated query execution and database communications' },
      { name: 'MySQL', role: 'Encrypted ballot tables and voter registration schemas' },
      { name: 'HTML5 / CSS3', role: 'Clean, accessible voting kiosk and admin dashboard interface' },
    ],
    engineeringHighlights: [
      {
        title: 'Replay Attack Prevention',
        desc: 'Each QR payload embeds a timestamp and cryptographic nonce that expires after a short window, preventing replay attempts.',
      },
      {
        title: 'Zero-Knowledge Ballot Integrity',
        desc: 'Separated authentication databases from ballot databases so even an admin with root DB access cannot deanonymize a voter.',
      },
      {
        title: 'High-Concurrency Vote Casting',
        desc: 'Tested with simulated parallel vote submissions; database transactions prevented race conditions completely.',
      },
    ],
    github: 'https://github.com/1MRGD/QR-Code-Based-Secure-Online-Voting-System-Using-Java',
  },
]
