// Get the current date - works
function getCurrentDate() {
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return currentDate.toLocaleDateString('en-US', options);
  }
  
  function updateCurrentDate() {
    const currentDateDisplay = document.getElementById('currentDateDisplay');
    if (currentDateDisplay) {
      currentDateDisplay.textContent = getCurrentDate();
    }
  }
  
  window.addEventListener('load', updateCurrentDate);


// Get codes - works

// import variables from './variables.js'
// import state from './state.js'



// const {selects, success} = variables;

// const handleChange = ({ target: { value, name } }) => {
//   state.pair = {
//     ...state.pair,
//     [name]: value,
//   };
// };

// const renderCodeList = () => {
//   selects.forEach((select) => {
//     state.codes.forEach(([code]) => { //arr 
//       const element = document.createElement("option");
//       element.value = code;
//       element.innerText = code;
//       select.insertAdjacentElement("beforeend", element);
//     });

//     const name = select.getAttribute("name");
//     name && select.addEventListener("change", handleChange);
//   })
// }

// //  Fetch codes - worked

// const fetchCodes = async () => {
  
//   try {
//     const response = await fetch(`${state.url}/codes`);
//     const data = await response.json();
//     console.log(data)

//     if(data.result === success) {
//       state.codes = data.supported_codes;
//       renderCodeList();
//       fetchLatest();
//     }
//   }catch(err) {
//     console.log(err)
//   }
// };

// fetchCodes();