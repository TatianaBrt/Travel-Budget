const button=document.querySelector("#btn");
button.addEventListener("click",calculateAmount);

const buttonTip=document.querySelector("#btnTip");
buttonTip.addEventListener("click",showTip);
function showTip(e){
    e.preventDefault();
    tip.style.display="inline";
    }
    const buttonTipRest=document.querySelector("#btnTipRest");
    buttonTipRest.addEventListener("click",showTipRest);
function showTipRest(e){
    e.preventDefault();
    tiprest.style.display="inline";
    }

function calculateAmount(e){
    e.preventDefault();
    const hotels=document.querySelector("#hotels").value;
    const Restaurants=document.querySelector("#Restaurants").value;
    const plane=document.querySelector("#plane").value;
    const food=document.querySelector("#food").value;
    const entert=document.querySelector("#entert").value;
    const transport=document.querySelector("#transport").value;
    const museum=document.querySelector("#museum").value;
    const tip=document.querySelector("#tip").value;
    const tiprest=document.querySelector("#tiprest").value;

    let tipHotels=hotels*tip
    let tipRestoran=Restaurants*tiprest
    let totalHotels=hotels;
    let totalRestor=Restaurants;
    let ttotalPlane=plane;
    let totalFood=food;
    let totalEntert=entert;
    let totalTransport=transport;
    let totalMuseum=museum;
    let totalSum=+tipHotels+ +tipRestoran+ +totalHotels+ +totalRestor+ +ttotalPlane+ +totalFood+ +totalEntert+ +totalTransport+ +totalMuseum;
     
    totalSum=totalSum.toFixed(2);
    document.querySelector("#totalNumber").textContent=totalSum;
    
}
