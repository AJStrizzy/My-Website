{/* <div class="Questions">
            <div class="card" style="width: 18rem;">
                <img src="https://ichef.bbci.co.uk/images/ic/1200x675/p05ln7jx.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Questions? We've got answers.</h5>
                  <p class="card-text">Just a piece of wood right? Not quite. From 6 to 12 strings, bluegrass to heavy metal, Yngwie to Doc Waston, there's a lot to cover here.</p>
                  <a href="#" class="btn btn-primary">Let's taco bout it</a>
                </div>
              </div>
        </div> */}

    const divQuestions = document.createElement('div');
    divQuestions.classList.add("Questions");

    const divCard = document.createElement('div');
    divCard.classList.add("card");
    
    const img = document.createElement("img");
    img.classList.add('card-img-top');

    const divCardBody = document.createElement('div');
    divCardBody.classList.add("card-body");

    const h5 = document.createElement("header");
    h5.classList.add("card-title")

    const p = document.createElement("paragraph");
    p.classList.add("card-text")

    const a = document.createElement("a");
    a.classList.add("btn btn-primary")

    divImg.setAttribute('src', 'https://ichef.bbci.co.uk/images/ic/1200x675/p05ln7jx.jpg');

    h5.appendChild(divCardBody);
    p.appendChild(divCardBody);
    a.appendChild(divCardBody);

    img.appendChild(divCard);
    divCardBody.appendChild(divCard);

    divCard.appendChild(divQuestions);


