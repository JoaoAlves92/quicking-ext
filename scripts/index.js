const button = document.querySelector("#submitter");

const exportData = () => {
  const filename = "candidates.xlsx";
  data = [
    {
      Market: "IN",
      "New Arrivals": "6",
      "Upcoming Appointments": "2",
      "Pending - 1st Attempt": "4",
    },
    {
      Market: "KS/MO",
      "New Arrivals": "4",
      "Upcoming Appointments": "4",
      "Pending - 1st Attempt": "2",
    },
    {
      Market: "KS/MO",
      "New Arrivals": "4",
      "Upcoming Appointments": "4",
      "Pending - 1st Attempt": "2",
    },
    {
      Market: "KS/MO",
      "New Arrivals": "4",
      "Upcoming Appointments": "4",
      "Pending - 1st Attempt": "2",
    },
  ];
  let ws = XLSX.utils.json_to_sheet(data);
  let wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "People");
  XLSX.writeFile(wb, filename);
};

const crawlerFunc = () => {
  const containerHeader = document.querySelector(".header-title").children[0];
  const head = containerHeader.children[0];
  const name = head.innerText.replace('Editar ', '');
  const cargo = containerHeader.children[1].innerText;
  const salario = document.querySelector('.card-body').innerText;
  const linkedinUrl = document.querySelector(".social-list").children[0].href;

  const filename = "candidates.xlsx";
  data = [
    {
      Nome: name,
      Cargo: cargo,
      Salario: salario,
      "LinkedIn Url": linkedinUrl,
    },
  ];
  let ws = XLSX.utils.json_to_sheet(data);
  let wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "People");
  XLSX.writeFile(wb, filename);
};

button.addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: crawlerFunc,
  });
  // chrome.tabs
  //   .sendMessage(activeTab.id, { command: "runCommand", data: {} })
  //   .catch((e) => console.log("e ->", e));
});
