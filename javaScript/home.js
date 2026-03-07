let active = "all"
const loadAllIssue = ()=>{
    const allIssueUrl = "https://phi-lab-server.vercel.app/api/v1/lab/issues"
    fetch(allIssueUrl)
    .then (res => res.json())
    .then (data => showIssues(data.data));
    
}
const loadOpenIssue = ()=>{
    const allIssueUrl = "https://phi-lab-server.vercel.app/api/v1/lab/issues"
    fetch(allIssueUrl)
    .then (res => res.json())
    .then (data => showOpenIssues(data.data.filter(issue => issue.status === 'open')));
    
}
const loadClosedIssue = ()=>{
    const allIssueUrl = "https://phi-lab-server.vercel.app/api/v1/lab/issues"
    fetch(allIssueUrl)
    .then (res => res.json())
    .then (data => showClosedIssues(data.data.filter(issue => issue.status === 'closed')));
    
}

const search =()=>{
    const searchValue = document.getElementById("search").value;
    const searchUrl = `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchValue}`
    fetch(searchUrl)
    .then(res=>res.json())
    .then(data=>showSearchIssues(data.data));
    

    const showSearchIssues = (issues) => {
    const parent = document.getElementById("cardsContainer")
    const count = document.getElementById("count")
    count.innerText = issues.length;
    parent.innerHTML= "";
    console.log(issues);
    issues.forEach(issue => {
        const newDiv = document.createElement("div")
        newDiv.innerHTML =`
         <div class="bg-white rounded-sm border-1 ${issue.status === 'open' ? `border-green-500` : `border-purple-500`}  border-t-4 px-5 py-3 h-full flex flex-col justify-between ">
                    <div class="flex justify-between items-center">
                        <div>
                        ${issue.status === 'open' 
                            ? `<img class="max-w-7 h-full" src="assets/Open-Status.png" alt="Open">` 
                            : `<img class="max-w-7 h-full" src="assets/Closed- Status .png" alt="Closed">`
                             }
                        </div>
                        <div class="${issue.priority === 'high' ? `bg-red-100 text-red-600` : `${issue.priority === 'medium' ?
                            `bg-yellow-100 text-yellow-600` : `bg-gray-100 text-gray-600`
                        }` }  rounded-full px-6 py-[2px] text-center font-semibold text-sm">
                        ${issue.priority}
                        </div>
                    </div>
                   <div>
                    <h2 class="font-bold text-md mt-2">${issue.title}</h2>
                    <p  class="text-[12px] text-gray-500 mt-1">
                        ${issue.description}
                    </p>
                   </div>
                    <div class="flex justify-between flex-wrap gap-1 items-center mt-4">
                        ${tag(issue.labels)}
                    </div>
                    <div>
                    <hr class="mt-3 ">
                    <div class="mt-3">
                        <p class="text-sm text-gray-500">${issue.author}</p>
                    <p class="text-sm text-gray-400">${issue.updatedAt}</p>
                    </div>
                    </div>
                </div>
            </div>
            
           
            
        `
        parent.append(newDiv)
    })
}
}



    document.getElementById("searchBtn").addEventListener('click', ()=>{
    search()
    const searchValue = document.getElementById("search");
    searchValue.value="";
})

const showOpenIssues = (issues) => {
    const parent = document.getElementById("cardsContainer")
    const count = document.getElementById("count")
    count.innerText = issues.length;
    parent.innerHTML= "";
    console.log(issues);
    issues.forEach(issue => {
        const newDiv = document.createElement("div")
        newDiv.innerHTML =`
        <div class="bg-white rounded-sm border-1 ${issue.status === 'open' ? `border-green-500` : `border-purple-500`}  border-t-4 px-5 py-3 h-full flex flex-col justify-between ">
                    <div class="flex justify-between items-center">
                        <div>
                        ${issue.status === 'open' 
                            ? `<img class="max-w-7 h-full" src="assets/Open-Status.png" alt="Open">` 
                            : `<img class="max-w-7 h-full" src="assets/Closed- Status .png" alt="Closed">`
                             }
                        </div>
                        <div class="${issue.priority === 'high' ? `bg-red-100 text-red-600` : `${issue.priority === 'medium' ?
                            `bg-yellow-100 text-yellow-600` : `bg-gray-100 text-gray-600`
                        }` }  rounded-full px-6 py-[2px] text-center font-semibold text-sm">
                        ${issue.priority}
                        </div>
                    </div>
                   <div>
                    <h2 class="font-bold text-md mt-2">${issue.title}</h2>
                    <p  class="text-[12px] text-gray-500 mt-1">
                        ${issue.description}
                    </p>
                   </div>
                    <div class="flex justify-between flex-wrap gap-1 items-center mt-4">
                        ${tag(issue.labels)}
                    </div>
                    <div>
                    <hr class="mt-3 ">
                    <div class="mt-3">
                        <p class="text-sm text-gray-500">${issue.author}</p>
                    <p class="text-sm text-gray-400">${issue.updatedAt}</p>
                    </div>
                    </div>
                </div>
            </div>
            
           
            
        `
        parent.append(newDiv)
    })
}
const showClosedIssues = (issues) => {
    console.log(issues);
    const parent = document.getElementById("cardsContainer")
    const count = document.getElementById("count")
    console.log(issues.length);
    count.innerText = issues.length;
    parent.innerHTML= "";
    // console.log(issues);
    issues.forEach(issue => {
        const newDiv = document.createElement("div")
        newDiv.innerHTML =`
        <div class="bg-white rounded-sm border-1 ${issue.status === 'open' ? `border-green-500` : `border-purple-500`}  border-t-4 px-5 py-3 h-full flex flex-col justify-between ">
                    <div class="flex justify-between items-center">
                        <div>
                        ${issue.status === 'open' 
                            ? `<img class="max-w-7 h-full" src="assets/Open-Status.png" alt="Open">` 
                            : `<img class="max-w-7 h-full" src="assets/Closed- Status .png" alt="Closed">`
                             }
                        </div>
                        <div class="${issue.priority === 'high' ? `bg-red-100 text-red-600` : `${issue.priority === 'medium' ?
                            `bg-yellow-100 text-yellow-600` : `bg-gray-100 text-gray-600`
                        }` }  rounded-full px-6 py-[2px] text-center font-semibold text-sm">
                        ${issue.priority}
                        </div>
                    </div>
                   <div>
                    <h2 class="font-bold text-md mt-2">${issue.title}</h2>
                    <p  class="text-[12px] text-gray-500 mt-1">
                        ${issue.description}
                    </p>
                   </div>
                    <div class="flex justify-between flex-wrap gap-1 items-center mt-4">
                        ${tag(issue.labels)}
                    </div>
                    <div>
                    <hr class="mt-3 ">
                    <div class="mt-3">
                        <p class="text-sm text-gray-500">${issue.author}</p>
                    <p class="text-sm text-gray-400">${issue.updatedAt}</p>
                    </div>
                    </div>
                </div>
            </div>
           
            
        `
        parent.append(newDiv)
    })
}
const showIssues = (issues) => {
    const parent = document.getElementById("cardsContainer")
    const count = document.getElementById("count")
    count.innerText = issues.length;
    parent.innerHTML= "";
    console.log(issues);
    issues.forEach(issue => {
        const newDiv = document.createElement("div")
        newDiv.innerHTML =`
         <div class="bg-white rounded-sm border-1 ${issue.status === 'open' ? `border-green-500` : `border-purple-500`}  border-t-4 px-5 py-3 h-full flex flex-col justify-between ">
                    <div class="flex justify-between items-center">
                        <div>
                        ${issue.status === 'open' 
                            ? `<img class="max-w-7 h-full" src="assets/Open-Status.png" alt="Open">` 
                            : `<img class="max-w-7 h-full" src="assets/Closed- Status .png" alt="Closed">`
                             }
                        </div>
                        <div class="${issue.priority === 'high' ? `bg-red-100 text-red-600` : `${issue.priority === 'medium' ?
                            `bg-yellow-100 text-yellow-600` : `bg-gray-100 text-gray-600`
                        }` }  rounded-full px-6 py-[2px] text-center font-semibold text-sm">
                        ${issue.priority}
                        </div>
                    </div>
                   <div>
                    <h2 class="font-bold text-md mt-2">${issue.title}</h2>
                    <p  class="text-[12px] text-gray-500 mt-1">
                        ${issue.description}
                    </p>
                   </div>
                    <div class="flex justify-between flex-wrap gap-1 items-center mt-4">
                        ${tag(issue.labels)}
                    </div>
                    <div>
                    <hr class="mt-3 ">
                    <div class="mt-3">
                        <p class="text-sm text-gray-500">${issue.author}</p>
                    <p class="text-sm text-gray-400">${issue.updatedAt}</p>
                    </div>
                    </div>
                </div>
            </div>
           
            
        `
        parent.append(newDiv)
    })
}



const toggle = (id) => {
    const allBtn = document.getElementById("all")
    const openBtn = document.getElementById("open")
    const closedBtn = document.getElementById("closed")



    if (id === "all"){
        allBtn.classList.add("btn-primary")
        openBtn.classList.remove("btn-primary")
        closedBtn.classList.remove("btn-primary")
        loadAllIssue()
    }

    else if (id === "open"){
        allBtn.classList.remove("btn-primary")
        openBtn.classList.add("btn-primary")
        closedBtn.classList.remove("btn-primary")
        loadOpenIssue()
        
    }
    else if (id === "closed"){
        closedBtn.classList.add("btn-primary")
        allBtn.classList.remove("btn-primary")
        openBtn.classList.remove("btn-primary")
        loadClosedIssue()
    }

}

loadAllIssue()


const tag =(arr)=>{
   const element = arr.map(el =>
        `<span class="${el === 'bug' ? 'bg-red-100 text-red-600' : `${el === 'enhancement' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`} rounded-full px-2 py-1 text-center font-semibold text-[12px] uppercase flex gap-1">${el === 'bug' ? '<img src="assets/BugDroid.svg">' : `${el === 'enhancement' ? '<img src="assets/Sparkle.svg">' : '<img src="assets/Lifebuoy.svg">'}` }
            ${el}
        </span>`
    )
    return(element.join(" "))
}

// {id: 7, title: 'Improve search functionality', description: 'Add filters for advanced search including date ranges, status, and tags.', status: 'open', labels: Array(2), …}