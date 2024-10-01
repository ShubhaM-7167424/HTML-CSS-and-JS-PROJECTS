const students = [
    { name: "Aarav Sharma", city: "Delhi", age: 16, totalMarks: 450 },
    { name: "Maya Iyer", city: "Bengaluru", age: 15, totalMarks: 480 },
    { name: "Rohit Verma", city: "Mumbai", age: 17, totalMarks: 420 },
    { name: "Ananya Gupta", city: "Kolkata", age: 16, totalMarks: 500 },
    { name: "Karan Mehta", city: "Chennai", age: 18, totalMarks: 475 },
    { name: "Priya Patel", city: "Ahmedabad", age: 15, totalMarks: 460 },
    { name: "Vikram Singh", city: "Hyderabad", age: 17, totalMarks: 490 },
    { name: "Nisha Rao", city: "Pune", age: 16, totalMarks: 455 },
    { name: "Neha Joshi", city: "Jaipur", age: 15, totalMarks: 440 },
    { name: "Ayaan Khan", city: "Lucknow", age: 17, totalMarks: 480 },
    { name: "Tanvi Agarwal", city: "Surat", age: 16, totalMarks: 470 },
    { name: "Arjun Nair", city: "Bhopal", age: 18, totalMarks: 495 },
    { name: "Riya Menon", city: "Kochi", age: 15, totalMarks: 450 },
    { name: "Vivek Joshi", city: "Indore", age: 17, totalMarks: 460 },
    { name: "Sanya Kapoor", city: "Nagpur", age: 16, totalMarks: 485 },
    { name: "Dev Sharma", city: "Chandigarh", age: 18, totalMarks: 490 },
    { name: "Tanya Singh", city: "Nashik", age: 15, totalMarks: 430 },
    { name: "Kunal Desai", city: "Vadodara", age: 17, totalMarks: 445 },
    { name: "Aditi Sinha", city: "Ghaziabad", age: 16, totalMarks: 475 },
    { name: "Raghav Bansal", city: "Coimbatore", age: 18, totalMarks: 500 },
    { name: "Sneha Yadav", city: "Patna", age: 15, totalMarks: 455 },
    { name: "Ritesh Agarwal", city: "Dehradun", age: 17, totalMarks: 480 },
    { name: "Meera Sahu", city: "Raipur", age: 16, totalMarks: 470 },
    { name: "Nikhil Verma", city: "Visakhapatnam", age: 18, totalMarks: 465 },
    { name: "Lakshmi Reddy", city: "Thiruvananthapuram", age: 15, totalMarks: 475 },
    { name: "Yash Patel", city: "Bhubaneswar", age: 17, totalMarks: 455 },
];

let filterStudents = students;

let noOfPages = Math.ceil(students.length / 8);
let currentPage = 1;

// logic for generating buttons
for(let i=1; i<=noOfPages; i++){
    let btn = document.createElement('button')
    btn.innerText  = i;
    btn.addEventListener('click', ()=>{
        currentPage = i
        paginate(currentPage)
    })
    document.getElementById('nums').appendChild(btn)
}

document.getElementById("next").addEventListener("click", () => {
    if (currentPage < noOfPages) {
        currentPage++;
        paginate(currentPage);
    }
});

document.getElementById("prev").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        paginate(currentPage);
    }
});

document.getElementById('search').addEventListener('keyup', ()=>{
    let val = document.getElementById('search').value
    console.log(val);

     filterStudents = students.filter(function(student){
        return student.name.includes(val)
    })

    currentPage = 1;
    paginate(1)
})


// initial Call
paginate(currentPage);

function paginate(pageNumber) {
    let startIndex = (pageNumber - 1) * 8;
    let lastIndex = startIndex + 8;
    let paginatedData = filterStudents.slice(startIndex, lastIndex);

    document.getElementById('info').innerText = currentPage + ' of ' + noOfPages
    document.getElementById("tbody").innerHTML = "";

    for (let i = 0; i < paginatedData.length; i++) {
        let row = document.createElement("tr");

        let noTd = document.createElement("td");
        noTd.innerText = startIndex + i + 1;

        let nameTd = document.createElement("td");
        nameTd.innerText = paginatedData[i].name;

        let cityTd = document.createElement("td");
        cityTd.innerText = paginatedData[i].city;

        let ageTd = document.createElement("td");
        ageTd.innerText = paginatedData[i].age;

        let tmTd = document.createElement("td");
        tmTd.innerText = paginatedData[i].totalMarks;

        row.append(noTd, nameTd, cityTd, ageTd, tmTd);

        document.getElementById("tbody").append(row);
    }
}
