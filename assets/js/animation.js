
function mouseHoverOnPortfolioDiv()
{


    let cursor  = document.querySelector("#cursor")

    let list = document.querySelectorAll('.bs-container3 .row div .bs-img-div')

    list.forEach((item)=>{


        item.addEventListener("mouseenter",()=>{
            // cursor.innerHTML = "View Case Study";
            gsap.to(cursor,{
                height:"50px",
                width:"200px",
                duration:0.1,
                mixBlendMode:"normal",
                borderRadius:"50px",
                backgroundColor:"black",
                color:"white",
                innerHTML:"View Case Study",
                fontSize:"1rem",
                overflow:"hidden"

            })

        })


        item.addEventListener("mouseleave",()=>{
            gsap.to(cursor,{
                height:"20px",
                width:"20px",
                duration:0,
                mixBlendMode:"difference",
                borderRadius:"",
                backgroundColor:"",
                color:"",
                fontSize:"0px",
                innerHTML:"View Case Study",
                overflow:"hidden"


            })

        })


    })


}

mouseHoverOnPortfolioDiv()