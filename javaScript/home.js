const loadAllIssue = ()=>{
    const allIssueUrl = "https://phi-lab-server.vercel.app/api/v1/lab/issues"
    fetch(allIssueUrl)
    .then (res => res.json())
    .then (data => showIssues(data.data));
}
loadAllIssue()
const showIssues = (issues) => {
    const parent = document.getElementById("cardsContainer")
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
                    <div class="flex justify-between items-center mt-4">
                         <div class="bg-red-100 text-red-600 rounded-full px-4 text-center font-semibold text-sm">BUG</div>
                          <div class="bg-yellow-100 text-yellow-600 rounded-full px-4 font-semibold text-center text-sm">HELP WANTED</div>
                    </div>
                    <div>
                    <hr class="mt-3 ">
                    <div class="mt-3">
                        <p class="text-sm text-gray-300">#1 by Muktadir</p>
                    <p class="text-sm text-gray-300">Date</p>s
                    </div>
                    </div>
                </div>
            </div>
            
           
            
        `
        parent.append(newDiv)
    })
}

let active = "all"

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
        allBtn.classList.remove("btn-primary")
        // loadOpen()
    }
    else if (id === "closed"){
        closedBtn.classList.add("btn-primary")
        allBtn.classList.remove("btn-primary")
        openBtn.classList.remove("btn-primary")
        // laodClosed()
    }

}


const loadOpen = () =>{

    

}

// {id: 7, title: 'Improve search functionality', description: 'Add filters for advanced search including date ranges, status, and tags.', status: 'open', labels: Array(2), …}