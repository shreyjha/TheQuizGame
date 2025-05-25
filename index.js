const quizGame = [
    {
        'question' : 'What is the primary purpose of a compiler?',
        'a' : 'Execute code directly',
        'b' : 'Translate code into machine language',
        'c' : 'Optimize memory usage',
        'd' : 'Run programs in the background',
        'correct' : 'b'
    },

    {
        'question' : 'Which data structure follows FIFO (First In, First Out)?',
        'a' : 'Stack',
        'b' : 'Queue',
        'c' : 'Tree',
        'd' : 'Graph',
        'correct' : 'b'
    },

    {
        'question' : 'What is the fundamental unit of storage in a database?',
        'a' : 'Row',
        'b' : 'Table',
        'c' : 'Column',
        'd' : 'Record',
        'correct' : 'd'
    },

    {
        'question' : 'Which algorithm is used to find the shortest path in a weighted graph?',
        'a' : 'Binary Search',
        'b' : 'Dijkstra\'s Algorithm',
        'c' : 'Merge Sort',
        'd' : 'Depth-First Search',
        'correct' : 'b'
    },

    {
        'question' : 'What does HTML stand for?',
        'a' : 'Hyperlink and Text Markup Language',
        'b' : 'High-Level Technical Mode Language',
        'c' : 'HyperText Markup Language',
        'd' : 'HyperTool Modular Language',
        'correct' : 'c'
    },

    {
        'question' : 'Which type of memory is volatile?',
        'a' : 'ROM',
        'b' : 'Hard Drive',
        'c' : 'RAM',
        'd' : 'Flash Storage',
        'correct' : 'c'
    },

    {
        'question' : 'What type of programming paradigm emphasizes functions over objects?',
        'a' : 'Object-Oriented Programming',
        'b' : 'Functional Programming',
        'c' : 'Procedural Programming',
        'd' : 'Imperative Programming',
        'correct' : 'b'
    },

    {
        'question' : 'Which component in a computer is responsible for executing instructions?',
        'a' : 'RAM',
        'b' : 'Hard Disk',
        'c' : 'CPU',
        'd' : 'Power Supply',
        'correct' : 'c'
    },

    {
        'question' : 'Which protocol is used for secure web communication?',
        'a' : 'HTTP',
        'b' : 'FTP',
        'c' : 'HTTPS',
        'd' : 'SMTP',
        'correct' : 'c'
    },

    {
        'question' : 'What does API stand for?',
        'a' : 'Automated Program Integration',
        'b' : 'Application Process Interface',
        'c' : 'Application Programming Interface',
        'd' : 'Advanced Protocol Interaction',
        'correct' : 'c'
    },

    {
        'question' : 'Which data structure is used for hierarchical organization?',
        'a' : 'Array',
        'b' : 'Graph',
        'c' : 'Tree',
        'd' : 'Hash Table',
        'correct' : 'c'
    },

    {
        'question' : 'What is the primary purpose of a database index?',
        'a' : 'Reduce storage space',
        'b' : 'Speed up queries',
        'c' : 'Improve data encryption',
        'd' : 'Increase redundancy',
        'correct' : 'b'
    },

    {
        'question' : 'Which sorting algorithm is considered the fastest in most cases?',
        'a' : 'Bubble Sort',
        'b' : 'Insertion Sort',
        'c' : 'Quick Sort',
        'd' : 'Selection Sort',
        'correct' : 'c'
    },

    {
        'question' : 'What does RAM stand for?',
        'a' : 'Random Algorithm Memory',
        'b' : 'Rapid Access Module',
        'c' : 'Read Access Memory',
        'd' : 'Random Access Memory',
        'correct' : 'd'
    },

    {
        'question' : 'What is the function of the OS kernel?',
        'a' : 'Handles user interface rendering',
        'b' : 'Manages system resources and hardware',
        'c' : 'Executes web applications',
        'd' : 'Provides cloud computing services',
        'correct' : 'b'
    },

    {
        'question' : 'Which logic gate returns true only if both inputs are true?',
        'a' : 'OR',
        'b' : 'XOR',
        'c' : 'AND',
        'd' : 'NOT',
        'correct' : 'c'
    },
    
    {
        'question' : 'What does HTTP stand for?',
        'a' : 'Hyper Transfer Text Protocol',
        'b' : 'Hypertext Transmission Protocol',
        'c' : 'Hypertext Transfer Protocol',
        'd' : 'High-Level Text Processing',
        'correct' : 'c'
    },

    {
        'question' : 'Which data structure allows constant-time retrieval of elements by key?',
        'a' : 'Stack',
        'b' : 'Queue',
        'c' : 'Hash Table',
        'd' : 'Linked List',
        'correct' : 'c'
    },

    {
        'question' : 'Which component is responsible for rendering web pages in a browser?',
        'a' : 'Backend Server',
        'b' : 'HTML Parser',
        'c' : 'Rendering Engine',
        'd' : 'CSS Processor',
        'correct' : 'c'
    },

    {
        'question' : 'What is the primary role of a firewall in computer security?',
        'a' : 'Encrypting data',
        'b' : 'Preventing unauthorized access',
        'c' : 'Speeding up network traffic',
        'd' : 'Managing power consumption',
        'correct' : 'b'
    },

    {
        'question' : 'Which programming language is primarily used for developing Android applications?',
        'a' : 'Python',
        'b' : 'Swift',
        'c' : 'Java',
        'd' : 'C++',
        'correct' : 'c'
    }
];


quizGame.sort(() => Math.random() - 0.5);

let index = 0;
let total = quizGame.length;

let question = document.getElementById("question");
let option1 = document.getElementById("a");
let option2 = document.getElementById("b");
let option3 = document.getElementById("c");
let option4 = document.getElementById("d");

let quesDisplay = document.getElementById("ques-display");
let button = document.getElementById("btn");

let quizBox = document.getElementById("quiz-box");

let correct = 0;

const loadQuestion = () => {

    if (index+1 == 4) {
        button.innerText = "Submit";
    }

    question.innerText = quizGame[index].question;

    option1.nextElementSibling.innerText = quizGame[index].a;
    option2.nextElementSibling.innerText = quizGame[index].b;
    option3.nextElementSibling.innerText = quizGame[index].c;
    option4.nextElementSibling.innerText = quizGame[index].d;

    quesDisplay.innerText = `${index+1} of 4 Questions`;

}

loadQuestion();

const nextQuestion = () => {

    if (option1.checked == false && option2.checked == false && option3.checked == false && option4.checked == false) {
        alert("Please select an option first to proceed further!");
    }

    else {
        checkCorrect();

    if (index+1 == 4) {
        quizBox.innerText = `Quiz Over, You got ${correct} out of 4!`;
        quizBox.style.backgroundColor = "white";
        quizBox.style.display = "flex";
        quizBox.style.alignItems = "center";
        quizBox.style.justifyContent = "center";
        quizBox.style.fontSize = "40px";
        quizBox.style.textAlign = "center";
    }

    option1.checked = false;
    option2.checked = false;
    option3.checked = false;
    option4.checked = false;

    index++;

    if (index < total) {
        loadQuestion();
    }
    }
}

const checkCorrect = () => {
    if (option1.checked == true) {
        if (quizGame[index].correct == option1.value) {
            correct++;
            return;
        }
    }

    else if (option2.checked == true) {
        if (quizGame[index].correct == option2.value) {
            correct++;
            return;
        }
    }

    else if (option3.checked == true) {
        if (quizGame[index].correct == option3.value) {
            correct++;
            return;
        }
    }

    else if (option4.checked == true) {
        if (quizGame[index].correct == option4.value) {
            correct++;
            return;
        }
    }
}
