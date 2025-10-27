const employees = [
    {
      "sid": "E001",
      "email": "employee1@company.com",
      "password": "123",
      "tasks": [
        {
          "title": "Prepare monthly report",
          "description": "Compile and summarize the department’s monthly performance data.",
          "date": "2025-10-25",
          "category": "Reporting",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Client feedback review",
          "description": "Analyze recent client feedback and propose improvements.",
          "date": "2025-10-22",
          "category": "Analysis",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Team meeting preparation",
          "description": "Prepare agenda and materials for the weekly team meeting.",
          "date": "2025-10-27",
          "category": "Coordination",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "sid": "E002",
      "email": "employee2@company.com",
      "password": "123",
      "tasks": [
        {
          "title": "Website content update",
          "description": "Update homepage banners and product descriptions.",
          "date": "2025-10-26",
          "category": "Content",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Social media post design",
          "description": "Design visuals for the Diwali campaign posts.",
          "date": "2025-10-21",
          "category": "Design",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "SEO keyword research",
          "description": "Find 20 new keywords for blog optimization.",
          "date": "2025-10-24",
          "category": "Marketing",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        },
        {
          "title": "Weekly newsletter",
          "description": "Draft and send out the weekly subscriber newsletter.",
          "date": "2025-10-28",
          "category": "Communication",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "sid": "E003",
      "email": "employee3@company.com",
      "password": "123",
      "tasks": [
        {
          "title": "Backend API testing",
          "description": "Run automated tests on all API endpoints.",
          "date": "2025-10-23",
          "category": "Development",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Bug fix sprint",
          "description": "Fix login module bugs reported in version 2.1.3.",
          "date": "2025-10-25",
          "category": "Development",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Database optimization",
          "description": "Optimize queries to reduce response time by 20%.",
          "date": "2025-10-29",
          "category": "Database",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "sid": "E004",
      "email": "employee4@company.com",
      "password": "123",
      "tasks": [
        {
          "title": "Inventory audit",
          "description": "Verify and record all stock levels for Q4.",
          "date": "2025-10-20",
          "category": "Operations",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Supplier follow-up",
          "description": "Confirm delivery status of pending material orders.",
          "date": "2025-10-25",
          "category": "Procurement",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Warehouse layout plan",
          "description": "Redesign warehouse floor layout for efficiency.",
          "date": "2025-10-30",
          "category": "Logistics",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "sid": "E005",
      "email": "employee5@company.com",
      "password": "123",
      "tasks": [
        {
          "title": "Customer onboarding",
          "description": "Guide 5 new customers through the setup process.",
          "date": "2025-10-23",
          "category": "Support",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Ticket resolution",
          "description": "Resolve all pending priority-1 customer tickets.",
          "date": "2025-10-21",
          "category": "Support",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Training document update",
          "description": "Revise internal documentation for new policies.",
          "date": "2025-10-27",
          "category": "Documentation",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Feedback summary",
          "description": "Compile support feedback and suggest workflow improvements.",
          "date": "2025-10-25",
          "category": "Analysis",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    }
]
  const admin = [
    {
      "sid": "A001",
      "email": "admin@company.com",
      "password": "123"
    }
  ]
   
export const setLocalStorage = ()=> {
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = ()=> {
    // FIX 1: Changed JSON.prase to JSON.parse
    const employees = JSON.parse(localStorage.getItem('employees'))
    // FIX 2: Changed JSON.prase to JSON.parse AND changed 'employees' to 'admin'
    const admin = JSON.parse(localStorage.getItem('admin'))
    
    console.log(employees, admin)
    
}