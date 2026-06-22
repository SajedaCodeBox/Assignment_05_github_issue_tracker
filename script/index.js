// For Login Interface
const getValueFromInput = (id1, id2) => {
    const username_input = document.getElementById(id1);
    const username_value = username_input.value;
    const password_input = document.getElementById(id2);
    const password_value = password_input.value;

    if (username_value == 'admin' && password_value == 'admin123') {

        alert("login Successfull");

        window.location.assign("./home.html");
    }
    else {
        alert("login Failed")
        return;
    }
    return (username_value, password_value);
    }


// For home page
// step :01
// for button color changeing
   const togglebtn = (id) => {
    const allbtn = document.getElementById ('all');
    const openbtn = document.getElementById ('open');
    const closedbtn = document.getElementById ('closed');
    allbtn.classList.remove('text-white', 'btn-primary');
    openbtn.classList.remove('text-white', 'btn-primary');
    closedbtn.classList.remove('text-white', 'btn-primary');
    
    const selected = document.getElementById (id);
    selected.classList.add('text-white', 'btn-primary');
   }

   let allissues = [];
    // step-02 : 

    // cart data loading:
    const loadIssues = async () => {
         manageSpinner (true);
    const url = ("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    const res = await fetch(url);
    const details = await res.json();
    {
        allissues = details.data
        displayIssues(allissues);
    }
    }

// step-02 :
// for cart display:
    const displayIssues = (words) => {
    const allIssuesContainer = document.getElementById("all_issues_container");
    allIssuesContainer.innerHTML = "";

    words.forEach(word => {
        console.log(word);
        const card = document.createElement("div");

    // "id": 1,
    // "title": "Fix navigation menu on mobile devices",
    // "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
    // "status": "open",
    // "labels": [
    // "bug",
    // "help wanted"
    // ],
    // "priority": "high",
    // "author": "john_doe",
    // "assignee": "jane_smith",
    // "createdAt": "2024-01-15T10:30:00Z",
    // "updatedAt": "2024-01-15T10:30:00Z"
        
        card.innerHTML = `
         <div onclick="loadWordDetails (${word.id})"  class = "bg-white m-5 rounded-xl border-t-4 ${word.status === 'open' ? 'border-[#01A96E]' : 'border-[#A755F6]'} w-73 h-80 mx-auto">
              <div class=" space-y-3 ">
      <div class="flex justify-between  p-4" >
      <div><img src="${word.status === 'open' ? './assets/Open-Status.png' : './assets/Closed- Status .png'}" alt=""></div>
      <p class="${word.priority === 'high' ? 'bg-[#FEECEC] text-[#EF4444]': word.priority === 'medium' ? 'bg-[#FFF6D1] text-[#F59E0B]' : word.priority === 'low' ? 'bg-[#EEEFF2] text-[#9CA3AF]' : 'bg-gray-400 text-gray-500'} font-medium text-[14px] rounded-full p-2 py-1"> ${word.priority.toUpperCase()}</p>
      </div>
      <div class=" p-4">
      <h2 class="font-semibold">${word.title}</h2>
      <p class="text-[#64748B] line-clamp-2 text-[12px]">${word.description}</p>
      </div>

      <div class = "flex p-1 gap-1">
      ${createElements (word.labels)}
        </div>
        </div>
     
       <div class="p-4  border-t-2 border-gray-300">
        <p class="text-[#64748B]">#1 by ${word.author}</p>
        <p class="text-[#64748B]">${word.createdAt}</p>
       </div>
      
       </div>
            `
        allIssuesContainer.append(card);
    })
    all_issue_count ();
     manageSpinner (false);
    }


    // step-03 :
    // for data transfering 
    const filterissues = (status) => {
    if (status === 'all') {
        displayIssues(allissues);
        return;
    }
    const filter = allissues.filter(issues => issues.status === status);
    displayIssues(filter);

    }


    // step-04 :
   const createElements = (arr) => {
   const getLabelClass = (label) => {
     if (label === 'bug')              return 'bg-[#FEECEC] text-[#EF4444]';
     else if (label === 'help wanted') return 'bg-[#FFF6D1] text-[#F59E0B]';
     else if (label === 'enhancement') return 'bg-[#FEECEC] text-[#EF4444]';
     else if (label === 'good first issue') return 'bg-[#FFF6D1] text-[#F59E0B]';
     else if (label === 'documentation')    return 'bg-[#FEECEC] text-[#EF4444]';
     else return 'bg-gray-200 text-gray-600';
   };
   const htmlElements = arr.map((el) => `<span class="btn btn-sm border-0 ${getLabelClass(el)}">${el === 'bug' ? `<img src="./assets/Vector.png" alt="">BUG` : el === 'help wanted' ? `<img src="./assets/Vector (1).png" alt="">HELP WANTED` :el === 'enhancement' ? `<img src="./assets/Vector.png" alt="">ENHANCEMENT` :el === 'good first issue' ? `<img src="./assets/Vector (1).png" alt="">GOOD FIRST ISSUE`:el === 'documentation' ? `<img src="./assets/Vector.png" alt="">DOCUMENTATION` :el }</span>`);
   return htmlElements.join(" ");
  };

    // step-05
  // Spinner
    const manageSpinner = (status) => {
    if (status == true) {
      document.getElementById("spinner").classList.remove("hidden");
      document.getElementById("all_issues_container").classList.add("hidden");
    }
    else {
       document.getElementById("all_issues_container").classList.remove("hidden");
      document.getElementById("spinner").classList.add("hidden");
    }
  }

    // step-06
    // total_issue_count  
  const all_issue_count = () => {
        const totalIssue = document.getElementById('totalIssue');
        const all_issues_container = document.getElementById('all_issues_container');
        totalIssue.innerText = all_issues_container.children.length
    }
    

  
  loadIssues();

  