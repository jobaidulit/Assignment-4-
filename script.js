  const jobs = [{
            id: 1,
            company: "Mobile First Corp",
            position: "React Native Developer",
            location: "Remote • Full-time • $130,000 - $175,000",
            type: "Full-time",
            salary: "NOT APPLIED",
            description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
            status: "all"
        }, {
            id: 2,
            company: "WebFlow Agency",
            position: "Web Designer & Developer",
            location: "Los Angeles, CA • Part-time • $80,000 - $120,000",
            type: "Full-time",
            salary: "NOT APPLIED",
            description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
            status: "all"
        }, {
            id: 3,
            company: "DataViz Solutions",
            position: "Data Visualization Specialist",
            location: "Boston, MA • Full-time • $125,000 - $165,000",
            type: "Full-time",
            salary: "NOT APPLIED",
            description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
            status: "all"
        }, {
            id: 4,
            company: "CloudFirst Inc",
            position: "Backend Developer",
            location: "Seattle, WA • Full-time • $140,000 - $190,000",
            type: "Contract",
            salary: "NOT APPLIED",
            description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
            status: "all"
        }, {
            id: 5,
            company: "Innovation Labs",
            position: "UI/UX Engineer",
            location: "Austin, TX • Full-time • $110,000 - $150,000",
            type: "Full-time",
            salary: "NOT APPLIED",
            description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
            status: "all"
        }, {
            id: 6,
            company: "MegaCorp Solutions",
            position: "JavaScript Developer",
            location: "New York, NY• Full-time •$130,000 - $170,00",
            type: "Full-time",
            salary: "NOT APPLIED",
            description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
            status: "all"
        }, {
            id: 7,
            company: "StartupXYZ",
            position: "Full Stack Engineer",
            location: "Remote• Full-time •$120,000 - $160,000",
            type: "Full-time",
            salary: "NOT APPLIED",
            description: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
            status: "all"
        }, {
            id: 8,
            company: "TechCorp Industries",
            position: "Senior Frontend Developer",
            location: "San Francisco, CA• Full-time •$130,000 - $175,000",
            type: "Full-time",
            salary: "NOT APPLIED",
            description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
            status: "all"
        }];

        let currentTab = "all";

        function renderJobs() {
            const container = document.getElementById("jobsContainer");
            const empty = document.getElementById("emptyState");

            container.innerHTML = "";

            const filtered = currentTab === "all" ?
                jobs :
                jobs.filter(job => job.status === currentTab);

            if (filtered.length === 0) {
                empty.classList.remove("hidden");
            } else {
                empty.classList.add("hidden");
            }

            filtered.forEach(job => {
                const card = document.createElement("div");
                card.className = "bg-white p-6 rounded-xl shadow";
                card.innerHTML = `
                <div>

<div class="flex justify-between">
                    <div>
      <h3 class="text-xl font-bold">${job.company}</h3>
      </div>
<div>
<button onclick="deleteJob(${job.id})"
        class="">
        <i class="fa-regular fa-trash-can"></i>
        </button>
</div>
</div>
      <p class=" text-gray-500 font-semibold my-2">${job.position}</p>
      <p class="text-[16px] text-gray-500">${job.location} • ${job.type}</p>
      <p class=" bg-[#EEF4FF] inline-block p-3 text-black font-bold mt-2">${job.salary}</p>
      <p class="text-gray-600 mt-2 text-[16px]">${job.description}</p>
      </div>

      
      </div>

      <div class="flex gap-2 mt-4">
        <button onclick="updateStatus(${job.id}, 'interview')" 
        class="flex border-2 border-green-500 text-green-600 p-2 rounded inline-block font-semibold">
        Interview
        </button>

        <button onclick="updateStatus(${job.id}, 'rejected')" 
        class="flex border-2 border-red-500 text-red-600 p-2 rounded font-semibold">
        Rejected
        </button>

          </div>
    `;
                container.appendChild(card);
            });

            updateCounts();
        }

        function updateStatus(id, status) {
            const job = jobs.find(j => j.id === id);

            if (job.status === status) {
                job.status = "all";
            } else {
                job.status = status;
            }

            renderJobs();
        }

        function deleteJob(id) {
            const index = jobs.findIndex(j => j.id === id);
            jobs.splice(index, 1);
            renderJobs();
        }

        function updateCounts() {
            const total = jobs.length;
            const interview = jobs.filter(j => j.status === "interview").length;
            const rejected = jobs.filter(j => j.status === "rejected").length;

            document.getElementById("totalCount").innerText = total;
            document.getElementById("interviewCount").innerText = interview;
            document.getElementById("rejectedCount").innerText = rejected;

            document.getElementById("sectionCount").innerText = total + " Jobs";

            document.querySelector("[data-tab='all']").innerText = `All (${total})`;
            document.querySelector("[data-tab='interview']").innerText = `Interview (${interview})`;
            document.querySelector("[data-tab='rejected']").innerText = `Rejected (${rejected})`;
        }

        document.querySelectorAll(".tab-btn").forEach(btn => {
            btn.addEventListener("click", function() {
                document.querySelectorAll(".tab-btn").forEach(b => {
                    b.classList.remove("bg-blue-600", "text-white");
                    b.classList.add("bg-white");
                });

                this.classList.remove("bg-white");
                this.classList.add("bg-blue-600", "text-white");

                currentTab = this.dataset.tab;
                renderJobs();
            });
        });

        renderJobs();