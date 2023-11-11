const increaseNum = document.querySelector(".number");
const button = document.getElementById("but");
let show_url = document.querySelector("#copy_url");
var n = 0;
let ias = localStorage.getItem("inc_num");

if (ias != null) {
  n = ias;
  increaseNum.innerHTML = n;
}

button.onclick = async () => {
 
  let urll = document.getElementById("url");


  const axios = require("axios");

  const encodedParams = new URLSearchParams();
  encodedParams.set("url", `${urll.value}`);

  const options = {
    method: "POST",
    url: "https://url-shortener-service.p.rapidapi.com/shorten",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "7f765cac1cmshbd01204f5018f00p1f0c1fjsn785cde0cbbb1",
      "X-RapidAPI-Host": "url-shortener-service.p.rapidapi.com",
    },
    data: encodedParams,
  };

  try {
    const response = await axios.request(options);
    console.log(response.data.result_url);
    show_url.value = response.data.result_url;
    n++;

    increaseNum.innerHTML = n;

    localStorage.setItem("inc_num", n);

  } catch (error) {
    swal("Error Found", `${error.message} \n URL not found!!`);
  }
};
