const categories = [
    {
        name: "About Me",
        link: "about_me"
    },
    {
        name: "Skills",
        link: "skills"
    },
    {
        name: "Technologies",
        link: "technologies"
    },
    {
        name: "Projects",
        link: "projects"
    },
    // {
    //     name: "Contact",
    //     link: "contact"
    // },
    // {
    //     name: "Blog",
    //     link: "blog"
    // }
]

const slides = [
    "mypc", "masterserver"
]


function button() {
    return {
        switched: false,
        switch() {
            this.switched = !this.switched
        }
    }
}


const skills = [
    {
        skill: "Reverse Engineering",
        description: [
            "Reverse Engineering or just Reversing is an hability that requires deep knowledge.",
            "Examples of Reversing could be finding hardcoded sensitive data in executables (PEs or ELFs), injecting a reverse shell in a binary or analyzing a malware."
        ]
    },
    {
        skill: "CI/CD",
        description: [
            "Continuous Integration & Continuous Delivery is a big set of practices aiming to ease, speed up, increase reliability, and reduce risk of infrastructure processes.",
            "It requires loads of tools and good practices knowledge, as well as debugging to pinpoint bugs."
        ]
    },
    {
        skill: "Pentesting",
        description: [
            "Pentesting or Penetration Testing is a compound of checks where the auditor plays an attacker role in order to uncover security flaws to remediate them before they happen.",
            "Security is important at every level of any kind of company, and preventing is the best way to secure assets."
        ]
    },
    {
        skill: "Development",
        description: [
            "As a DevSecOps, being able to develop programs or scripts to automate processes and workflows is a nice skill.",
            "This can be useful when it comes to classifying code and infrastructure problems, creating workflows or generating POC"
        ]
    },
    {
        skill: "AWS Infrastructure",
        description: [
            "AWS is the leading cloud services platform, offering a wide range of different infrastructure solutions for each requirement.",
            "Selecting and having deep knowledge of each service makes a big difference in scalability, price and speed"
        ]
    },
    {
        skill: "Cloud Native & Bare-Metal",
        description: [
            "Infrastructure can be managed close to the metal or be already managed by cloud services, serving as a layer of abstraction.",
            "Being able to control at high and low level both kind of infrastructure is one of the most important skills."
        ]
    }
];

const projects = [
    {
        name: "MasterServer",
        image: "MasterServerTransparent.png",
        link: "https://masterserver.readthedocs.io/en/latest",
        description: "MasterServer is my end-of-college project in collaboration with Jose Domingo. It features the infrastructure and software of a Minecraft based platform, including a DB , backend, frontend, Minecraft Java and Bedrock Edition servers, monitoring, media server, storage services and more, all implemented in a self built Proxmox cluster at home. The docs are made with Sphinx and hosted for free using ReadTheDocs.",
        categories: [
            {
                name: "Infrastructure",
                color: "pink"
            },
            {
                name: "Bare-Metal",
                color: "brown"
            },
            {
                name: "Services",
                color: "green"
            },
            {
                name: "Hardware",
                color: "red"
            },
        ],
    },
    {
        name: "IZV's First Bug Bounty",
        image: "BugBounty.png",
        link: "https://github.com/EfrenZaidinVergeles/PonySec",
        description: "I won the college's first bug bounty contest during my cybersecurity year. This greatly improved the college security at both code and infrastructure levels. A whole report can be found in the repository, featuring some of the tools I developed by myself during this journey.",
        categories: [
            {
                name: "Cybersecurity",
                color: "pink"
            },
            {
                name: "Reversing",
                color: "indigo"
            },
            {
                name: "Pentesting",
                color: "purple"
            },
            {
                name: "Programming",
                color: "yellow"
            },            
        ],
    },
    {
        name: "Sega Genesis Game",
        image: "Genesis4.jpg",
        link: "https://github.com/EfrenZaidinVergeles/GenesisGame",
        description: "I love learning stuff at low level to get a full-picture knowledge. I first started learning PHP (Aka Programmers Hate PHP and vice versa) at college, where I got the highest grade in class even tho I totally disliked it. Then I decided to learn assembly to prove it's easier than PHP. Fitting a whole game in barely 4MB of ROM cartridge is exciting.",
        categories: [
            {
                name: "Programming",
                color: "yellow"
            },            
            {
                name: "Assembly",
                color: "rose"
            },            
            {
                name: "Hardware",
                color: "red"
            },            
        ],
    },
    {
        name: "This Website",
        image: "Website.jpg",
        link: "https://github.com/EfrenZaidinVergeles/Efrenzaidinvergeles.github.io",
        description: "I've made this website to have a place where I can showcase my projects in a user friendly way.",
        categories: [
            {
                name: "Programming",
                color: "yellow"
            },            
            {
                name: "Frontend",
                color: "cyan"
            },            
        ],
    },
    {
        name: "Cybersecurity Intro",
        image: "CybersecurityIntro.jpg",
        link: "https://github.com/EfrenZaidinVergeles/CybersecurityIntro",
        description: "I took part as a teacher in a set of classes for the high school students, oriented to teach basic cybersecurity concepts in a fun and practical format. The repository shows some of the content I taught during those classes.",
        categories: [
            {
                name: "Cybersecurity",
                color: "pink"
            },            
            {
                name: "Cracking",
                color: "teal"
            },            
            {
                name: "Pentesting",
                color: "purple"
            },            
            {
                name: "Education",
                color: "lime"
            },            
        ],
    }
];

const technologies = ['Proxmox', 'Kubernetes', 'Docker', 'VirtualBox', 'Wfuzz', 'Burp', 'Rainbowcrack', 'Cutter', 'Ghidra', 'GDB', 'HTML', 'JavaScript', 'Node', 'Yarn', 'PHP', 'Assembly', 'Python', 'Flask', 'TailwindCSS', 'CSS', 'MySQL', 'Postgresql', 'InfluxDB', 'Grafana', 'GNS3', 'MS-DOS', 'Windows', 'Linux', 'NginX', 'Apache', 'TomEE', 'AWS', 'VisualVM', 'ReadTheDocs', 'Trello', 'Minecraft', 'Git', 'Ansible']


function getData() {
    return {
        formData: {
            email: "",
            password: ""
        },
        status: false,
        loading: false,
        isError: false,
        modalHeaderText: "",
        modalBodyText: "",
        buttonLabel: 'Submit',
        isEmail(email) {
            var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        },

        submitData() {
            // Ensures all fields have data before submitting
            if (!this.formData.email.length ||
                !this.formData.password.length) {
                alert("Please fill out all the fields and try again")
                return;
            }
            this.buttonLabel = 'Submitting...'
            this.loading = true;
            fetch('https://reqres.in/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.formData)
            })
                .then((response) => {
                    if (response.status === 201) {
                        this.modalHeaderText = "Mail Sent"
                        this.modalBodyText = "The mail has been successfully delivered";
                        this.status = true;
                    } else {
                        throw new Error("The mail couldn't be sent");
                    }
                })
                .catch((error) => {
                    this.modalHeaderText = "Ooops Error!"
                    this.modalBodyText = error.message;
                    this.isError = true;
                })
                .finally(() => {
                    this.loading = false;
                    this.buttonLabel = 'Submit'
                })
        }
    }
}