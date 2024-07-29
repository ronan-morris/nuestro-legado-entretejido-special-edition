window.addEventListener("load", (event) => {
    if (window.location.hash) {
        try {
            document.querySelector(window.location.hash).click();
        } catch (error) {
            console.log(error);
        }
    }
});

// Article card click events
const myModal = new bootstrap.Modal(document.getElementById("articleContainer"), {});

// Article

document.getElementById('latin-dance').addEventListener('click', function() {
    const myArticle = {
        slug: "latin-dance",
        headline_en: "Saving salsa: Gainesville community fights to keep free salsa classes",
        headline_es: "",
        subtitle_en: "A city proposal could threaten weekly classes",
        subtitle_es: "",
        card_path: "latin-dance.jpg", 
        card_caption_en: "",
        card_caption_es: "",
    
        card_caption_en: "",
        card_caption_es: "",
        author_one: "Carlos Alemany",
        translator: "",
        author_two: "",
        contact_one_en: "Contact Carlos Alemany at calemany@alligator.org. Follow him on X @close_alemany",
        contact_two_en: "",
        contact_one_es: "",
        contact_two_es: "",
        about_one_en: "",
        about_two_en: "",
        about_one_es: "",
        about_two_es: "",
        date: "", 
        desc_en: "",
        desc_es: "",
        body_en: "<p>In the heart of downtown Gainesville, a vibrant community gathers each week to connect through the rhythm of salsa to dance the night away. </p><p>Latin dance is a cornerstone of Gainesville's cultural landscape, drawing festive residents and visitors alike to the downtown area.  </p><p>However, a proposal to open a street for parking has many concerned for the future of the cherished tradition.</p><p>Since January 2021, The Gator Salsa Club has hosted weekly outdoor classes and open dancing sessions in partnership with The Bull pub in downtown Gainesville. But, a proposal to open the street in front of The Bull could bring the weekly classes to a halt.</p><p>Salil Bavdekar, the organizer of Salsa in the Streets, said the proposal could affect the current pedestrian-friendly setup.</p><p>\"If it's an open street, we can't have our classes there, we can't have dancing there, in which case we'd probably end up moving back to campus,” Bavdekar said. “So basically, all the benefits we had in the last three or four years, and all the benefits the city had of having this free community event being run for them for the last three years, would just disappear.”</p><p>The Downtown Advisory Board is set to oversee proposals for opening the streets to increase parking spaces, a move that some believe could benefit businesses by making them more accessible to patrons. </p><p>Jacob Larson, the owner of The Bull, said opening up parking could benefit businesses by making them more accessible to patrons, but it could also detract from the community and cultural activities that take place in pedestrian areas. </p><p>“It brings people to downtown, and then there's a centripetal effect where it spins out and benefits other businesses as well,\" he said.</p><p>Larson said having a free, accessible area where people can enjoy activities like salsa dancing can foster social connections, cultural exchange and a sense of belonging.</p><p>\"A pedestrian-centered, closed street is an integral part of a flourishing downtown ecosystem,” Larson said. “It is a catalyst for arts, culture, history and collision space for people that make up the entire community.\"</p><p>For many, salsa nights are more than just an evening of dance — they are a lifeline to culture, connection and community. </p><p>Yasier Figueroa, an 18-year-old Puerto Rican resident of Gainesville, said events offered by Salsa in the Streets bring back nostalgia.</p><p>\"I take dancing as a part of me being back home,” Figueroa said. “It's kind of like a nostalgic feeling.\"</p><p>He said these events amplify the visibility and voice of Gainesville’s Hispanic community, which he describes as a “silent minority.” </p><p>“It would bring out the true sense of who we are,” he said. “We're loud, we're vibrant, and it would showcase our culture.\"The City Commission will consider the Downtown Advisory Board's final decision following public comments scheduled August 6. </p><p>Reflecting on the street proposal, Figueroa emphasized its drawbacks.</p><p>\"It would be detrimental… because events like these bring different types of people together to do something beautiful,\" he said.</p>",
        body_es: ""
    };

    const parent = document.querySelector("#articleContainer");

    
    parent.querySelector('#articleTitleEN').innerText = myArticle.headline_en;
    parent.querySelector('#articleSubtitleEN').innerText = myArticle.subtitle_en;
    parent.querySelector('#articleTitleES').innerText = myArticle.headline_es;
    parent.querySelector('#articleSubtitleES').innerText = myArticle.subtitle_es;
    parent.querySelector('#articleAuthorEN').innerText = myArticle.author_one;
    parent.querySelector('#articleAuthorES').innerText = myArticle.author_one;

    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAuthorEN').innerHTML += ' and ' + myArticle.author_two;
    }
    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAuthorES').innerHTML += ' y ' + myArticle.author_two;
    }
    if (myArticle.translator.length > 4) {
        parent.querySelector('#articleTranslator').innerHTML =  myArticle.translator;
    }

    parent.querySelector('#articleDateEN').innerText = 'Monday, Jul. 28, 2024';
    parent.querySelector('#articleDateES').innerText = 'Lunes, Jul. 28, 2024';
    parent.querySelector('#articleCardImageEN').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleCardImageES').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleBodyEN').innerHTML = myArticle.body_en;
    parent.querySelector('#articleAboutEN').innerText = myArticle.about_one_en;
    parent.querySelector('#articleBodyES').innerHTML = myArticle.body_es;
    parent.querySelector('#articleAboutES').innerText = myArticle.about_one_es;


    parent.querySelector('#articleContactEN').innerHTML = myArticle.contact_one_en;
    parent.querySelector('#articleContactES').innerHTML = myArticle.contact_one_es;
    if (myArticle.contact_one_en.length > 4) {
        parent.querySelector('#articleContactEN').innerHTML += ' \n' + myArticle.contact_two_en;
    }
    if (myArticle.contact_one_es.length > 4) {
        parent.querySelector('#articleContactES').innerHTML += ' \n' + myArticle.contact_two_es;
    }
    

    parent.querySelector('#articleCardCaptionEN').style.display = "block";
    parent.querySelector('#articleCardCaptionES').style.display = "block";


    if (myArticle.card_caption_en) {
        parent.querySelector('#articleCardCaptionEN').innerText = myArticle.card_caption_en;
    } else {
        parent.querySelector('#articleCardCaptionEN').style.display = "none";
    }
    if (myArticle.card_caption_en) {
        parent.querySelector('#articleCardCaptionES').innerText = myArticle.card_caption_es;
    } else {
        parent.querySelector('#articleCardCaptionES').style.display = "none";
    }    


    if (myArticle.about_two_en.length > 4) {
        parent.querySelector('#articleAboutEN').innerHTML += '<br><br>' + myArticle.about_two_en;
    }
    if (myArticle.about_two_es.length > 4) {
        parent.querySelector('#articleAboutES').innerHTML += '<br><br>' + myArticle.about_two_es;
    }

    

    

    window.location.hash = myArticle.slug;

    myModal.show();
}, false);

document.getElementById('home-ink').addEventListener('click', function() {
    const myArticle = {
        slug: "home-ink",
    headline_en: "A home made of ink and blood",
    headline_es: "Un hogar de tinta y sangre",
    subtitle_en: "",
    subtitle_es: "",
    card_path: "home-ink.jpg", 

        card_caption_en: "",
        card_caption_es: "",
        author_one: "Valentina Sandoval",
    author_two: "",
    translator: "",
    contact_one_en: "",
    contact_two_en: "",
    contact_one_es: "",
    contact_two_es: "",
    about_one_en: "",
    about_two_en: "",
    about_one_es: "",
    about_two_es: "",
    date: "", 
    desc_en: "",
    desc_es: "",
    body_en: "<p>I’ve lost count of the times I have written about my home.</p><p> The words dance in nostalgia through a blank piece of paper as I desperately search my mind for the traces of my old life. I remember the smell of fresh coffee, my mom braiding my hair on a school morning and the perpetual sound of the news and the national anthem on TV at 6 a.m.</p><p>I was raised among social unrest, in a country with a turbulent history and a dictatorship that outdates me. Some of my earliest memories are of my grandmother yelling at the president on the TV for raising prices and filling the streets with crime. </p><p>But my relationship with journalism started as early as the day of my birth — I was born in Venezuela on June 27, the National Day of the Journalist. My parents, both engineers, wanted me to love the sciences and math like they did, but from an early age I was writing my secrets and stories on every piece of paper I could find around the house.</p><p>Although I was painfully aware of the situation in my country at a ripe 9 years of age, I hated the news. My grandmother would turn on the TV in my living room every morning while I was getting ready for school. Every local channel played the national anthem before their morning show and around noon, and more often than not, it was followed by a long-winded, neverending address from President Hugo Chavez.</p><p>All I really knew about politics back then was that we hated Chavez and that he was ruining our country. I didn’t actually start caring until one day in 2013. </p><p>I was at my weekly ballet classes in downtown Acarigua when my dance instructor got a call that sent the entire class into a frenzy: Hugo Chavez was dead. Almost like someone had flipped a switch, you could hear the noises outside the tiny classroom get louder and see the panic set in a dozen little girls who knew the social unrest this news would cause. My mom came running to pick me up from class, she told me to keep quiet and not ask anyone about politics and said we would stay home from school for a couple of days.</p><p>President from 1999 to 2013, Chavez led a dictatorship in Venezuela that changed the national constitution in his favor — giving almost unlimited power to the executive branch and allowing perpetual reelection — and caused years of high inflation, rising crime and complete censorship of the press and any opposition to his administration. </p><p>But this story is not about Hugo Chavez or his dictatorship’s successor Nicolas Maduro. This is about the anger that has settled in my blood from seeing a country go dark.</p><p>From my earliest memories of the news channels reporting on crucial political changes and being interrupted by a random presidential address, I saw the news cycle in Venezuela be slowed down, silenced and controlled. </p><p>Venezuela ranks 159th out of 180 countries in the Reporters Without Borders (RSF) Press Freedom Index. Since Maduro’s rise to power, RSF counted the disappearance of around 100 print newspapers and the closure of 200 radio stations. </p><p>Laws in place since 2010 do not permit the “questioning” of government officials, so multiple journalists have been sanctioned for speaking against the government and many news outlets have chosen to remain silent in fear of retaliation. Even newspapers that have turned to digital-only for their coverage are censored, since the state-controlled internet service provider CANTV blocks multiple websites including 35 independent news sites, according to Reuters Institute. </p><p>I didn’t like my country while I lived in it because it felt like a cage of corruption and silenced voices, but that dislike toward my heritage turned into a passion to be the difference I never got to see. I started looking at journalists I used to watch on TV when I was younger like Carla Angola, Gladys Rodriguez and Jose Vicente Antonetti, and I saw them leave the country in search of a place where they could broadcast the voices that were not being heard. </p><p>I started appreciating the place I am from not because of its crises or tragedies, but because of the undying resilience of its people. </p><p>My mom told me not long ago that my grandmother’s dream was to be a journalist, but she never had the courage to pursue such a dangerous and uncertain career. I may not remember the color of the walls in my childhood home and I may not go back to see it in many years, but I still carry that same anger and perseverance passed down through my lineage that makes me want to be a voice for the silenced.</p><p>It still hurts to write about my home. It hurts to think of saying goodbye to my mom at an airport at 13 years old, or the multiple Christmases spent over FaceTime with family spread all over the continent, or the fact that I still have not been able to visit my grandfather’s grave since he died in 2018. It hurts to think of thousands of people who are separated from their loved ones, not only by thousands of miles but by the deafening silence of government censorship.</p><p>It hurts but I’m willing to turn the blood into ink as many times as needed if it means not staying silent. So I thank my heritage for my career and for the courage to use my voice for those who cannot.</p>", // Paste FORMATED and MINIFIED article text here
    body_es: "<p>He perdido la cuenta de las veces que he escrito sobre mi hogar.</p><p>Las palabras bailan en nostalgia a través de un papel en blanco mientras busco desesperadamente las piezas de mi vida pasada en lo recóndito de mi mente. Recuerdo el olor del café, a mi mamá trenzando mi pelo en una mañana antes del colegio y el sonido perpetuo de las noticias y el himno nacional en la televisión a las 6 a.m.</p><p>Fui críada en medio de disturbios sociales, en un país con una historia turbulenta y una dictadura más vieja que yo. Entre mis primeros recuerdos está mi abuela gritandole al presidente en la televisión por subir los precios y llenar las calles de inseguridad.</p><p>Pero mi relación con el periodismo empezó tan pronto como salí del vientre — yo nací un 27 de junio en Venezuela, el Día Nacional del Periodista. Mis padres, ambos ingenieros, querían que amara las ciencias y la matemática tanto como ellos, pero desde una edad temprana me encontraba escribiendo historias y secretos en cada trozo de papel que encontraba en mi casa.</p><p>A pesar de estar consciente de la situación del país a tan solo los 9 años, siempre odié las noticias. Mi abuela prendía la televisión de la sala todas las mañanas mientras me arreglaba para ir al colegio. Cada canal de cable local tocaba el himno nacional antes su transmisión de la mañana y del mediodía, y después del posterior casi siempre empezaba una cadena nacional interminable del presidente Hugo Chavez.</p><p>Lo único que sabía de política a esa edad era que odiabamos a Chavez y que estaba destruyendo nuestro país. No fue sino hasta 2013 que me empezó a importar.</p><p>Mientras estaba en mi clase semanal de ballet en el centro de Acarigua, la profesora recibió la llamada que desató el caos: Hugo Chavez había fallecido. En cuestión de segundos el mundo alrededor cambió, el ruido de la calle afuera del pequeño salon de baile subió de volumen y el pánico alcanzó al grupo de niñas en tutús que sabían los disturbios que la noticia causaría. Mi mamá vino a buscarme tan rápido como pudo, me dijo que me quedara quieta y no le hablara a nadie sobre política y que nos quedaríamos unos días en la casa antes de volver al colegio.</p><p>Chavez, el presidente desde 1999 a 2013, lideró una dictadura en Venezuela que cambió la constitución nacional a su favor — dandole control casi ilimitado al poder ejecutivo y permitiendo su reelección perpetua — y causó años de hiperinflación, aumento en el crimen y la censura completa de la prensa y cualquier oposición a su gobierno.</p><p>Pero esta historia no es sobre Hugo Chavez o el sucesor de su dictadura, Nicolas Maduro. Esta historia es sobre la impotencia que se ha acumulado en mi sangre de ver un país ser olvidado.</p><p>Desde mis memorias más tempranas de ver canales de noticias reportando sobre temas importantes, solo para ser interrumpidos por una cadena nacional del presidente, vi el ciclo de noticias en Venezuela ser desacelerado, silenciado y controlado. </p><p>Venezuela ocupa el lugar 159 de 180 países en el Indice de Libertad de la Prensa de Reporteros Sin Fronteras. Desde el comienzo del gobierno de Maduro, RSF ha contado la desaparición de al menos 100 períodicos físicos y el cierre de 200 estaciones de radio. </p><p>Las leyes vigentes desde el 2010 no permiten “cuestionar” a oficiales del gobierno, lo cual ha llevado a múltiples periodistas sancionados por hablar en contra del gobierno y a muchos medios de comunicación a limitar su cobertura por miedo a problemas legales. Incluso los periódicos que han cambiado su formato a solo digital han sido censurados, pues el proveedor de internet CANTV es controlado por el estado y bloquea una gran cantidad de sitios web, entre ellos 35 sitios de noticias independientes, según Reuters Institute.</p><p>No me gustaba mi país por mucho tiempo porque se sentía como una jaula de corrupción y voces reprimidas, pero ese desagrado hacia mi herencia se ha convertido en una pasión por ser la diferencia que nunca llegué a ver. Empecé a recordar los periodistas que veía en televisión cuando era pequeña, como Carla Angola, Gladys Rodriguez y Jose Vicente Antonetti, y vi como se fueron del país en busca de un lugar donde pudieran compartir esas historias que no estaban siendo escuchadas.</p><p>Así fue que empecé a apreciar a mi lugar de origen no por sus crisis o tragedias, sino por la resiliencia imparable de su gente.</p><p>Mi mamá me dijo hace un tiempo que el sueño de mi abuela por un tiempo era ser periodista, pero que nunca tuvo el coraje de perseguir una carrera tan peligrosa e incierta. Puede que no recuerde el color de las paredes de mi vieja casa y puede que no vuelva a verla en muchos años, pero todavía llevo en mi linaje esa ira y perseverancia que me hace querer ser una voz para los silenciados.</p><p>Todavía me duele escribir sobre mi hogar. Me duele pensar en decirle adios a mi mamá en el aeropuerto a las 13 años, o en las múltiples navidades celebradas por videollamada con mi familia que vive en todo el continente, o en el hecho de que no he podido visitar la tumba de abuelo desde que falleció en 2018. Me duele pensar en las miles de personas separadas de sus seres queridos, no solo por miles de kilómetros sino también por el silencio ensordecedor de la censura del gobierno.</p><p>Me duele, pero estoy dispuesta a convertir la sangre en tinta tantas veces sea necesario si eso significa no callarme. Así que le doy las gracias a mi herencia por mi carrera y por el coraje de usar mi voz por todos los que no pueden.</p>"
    };

    const parent = document.querySelector("#articleContainer");

    
    parent.querySelector('#articleTitleEN').innerText = myArticle.headline_en;
    parent.querySelector('#articleSubtitleEN').innerText = myArticle.subtitle_en;
    parent.querySelector('#articleTitleES').innerText = myArticle.headline_es;
    parent.querySelector('#articleSubtitleES').innerText = myArticle.subtitle_es;
    parent.querySelector('#articleAuthorEN').innerText = myArticle.author_one;
    parent.querySelector('#articleAuthorES').innerText = myArticle.author_one;

    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAuthorEN').innerHTML += ' and ' + myArticle.author_two;
    }
    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAuthorES').innerHTML += ' y ' + myArticle.author_two;
    }
    if (myArticle.translator.length > 4) {
        parent.querySelector('#articleTranslator').innerHTML =  myArticle.translator;
    }

    parent.querySelector('#articleDateEN').innerText = 'Monday, Jul. 28, 2024';
    parent.querySelector('#articleDateES').innerText = 'Lunes, Jul. 28, 2024';
    parent.querySelector('#articleCardImageEN').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleCardImageES').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleBodyEN').innerHTML = myArticle.body_en;
    parent.querySelector('#articleAboutEN').innerText = myArticle.about_one_en;
    parent.querySelector('#articleBodyES').innerHTML = myArticle.body_es;
    parent.querySelector('#articleAboutES').innerText = myArticle.about_one_es;


    parent.querySelector('#articleContactEN').innerHTML = myArticle.contact_one_en;
    parent.querySelector('#articleContactES').innerHTML = myArticle.contact_one_es;
    if (myArticle.contact_one_en.length > 4) {
        parent.querySelector('#articleContactEN').innerHTML += ' \n' + myArticle.contact_two_en;
    }
    if (myArticle.contact_one_es.length > 4) {
        parent.querySelector('#articleContactES').innerHTML += ' \n' + myArticle.contact_two_es;
    }
    

    parent.querySelector('#articleCardCaptionEN').style.display = "block";
    parent.querySelector('#articleCardCaptionES').style.display = "block";


    if (myArticle.card_caption_en) {
        parent.querySelector('#articleCardCaptionEN').innerText = myArticle.card_caption_en;
    } else {
        parent.querySelector('#articleCardCaptionEN').style.display = "none";
    }
    if (myArticle.card_caption_en) {
        parent.querySelector('#articleCardCaptionES').innerText = myArticle.card_caption_es;
    } else {
        parent.querySelector('#articleCardCaptionES').style.display = "none";
    }    


    if (myArticle.about_two_en.length > 4) {
        parent.querySelector('#articleAboutEN').innerHTML += '<br><br>' + myArticle.about_two_en;
    }
    if (myArticle.about_two_es.length > 4) {
        parent.querySelector('#articleAboutES').innerHTML += '<br><br>' + myArticle.about_two_es;
    }

    

    

    window.location.hash = myArticle.slug;

    myModal.show();
}, false);

document.getElementById('children-book').addEventListener('click', function() {
    const myArticle = {
        slug: "children-book",
    headline_en: "Children’s book project captures untold Hispanic immigration stories",
    headline_es: "Proyecto de libros para niños capta historias nunca contadas de la inmigración hispana",
    subtitle_en: "UF students create narratives to connect with Hispanic, immigrant heritage ",
    subtitle_es: "Estudiantes de la UF crean narrativas para conectar con el patrimonio hispano e inmigrante",
    card_path: "children-book.jpg", 

        card_caption_en: "",
        card_caption_es: "",
        author_one: "Grace McClung",
    author_two: "",
    translator: "Avery Parker",
    contact_one_en: "Contact Grace McClung at gmcclung@alligator.org. Follow her on X @gracenmclung",
    contact_two_en: "",
    contact_one_es: "Contacta a Grace McClung por gmcclung@alligator.org. Síguela en X @gracenmclung. Traducido por Avery Parker. Contáctalo por aparker@alligator.org. Síguelo en X @AveryParke98398.",
    contact_two_es: "",
    about_one_en: "",
    about_two_en: "",
    about_one_es: "",
    about_two_es: "",
    date: "", 
    desc_en: "",
    desc_es: "",
    body_en: "<p>Instead of reading about Jack and Annie’s travels to distant lands in a magic treehouse, children might soon be reading about Jose’s journey from the mountains of Mexico to a Texas ranch or Ericka’s move from the Peruvian coast to the cold winds of Ohio. </p><p>In an immigration class taught by UF assistant professor Rafael Solórzano, students created children’s picture books based on immigration oral histories they conducted themselves, capturing the experience of people like Jose and Ericka in short, kid-friendly stories. </p><p>The class — Latinx Migration, Refugees and Citizenship in the U.S. — previously included an oral history paper at the end of the semester, but Solórzano wanted to do something different this year after drawing inspiration from a bilingual storytelling project at local Gainesville elementary schools. </p><p>“We're telling the story of how migrants arrived to the U.S. and where they settled,” Solórzano said. “I think that’s powerful because… if you go to a bookstore, they’re most likely going to be about little children growing up in New York and all these traditional gateway cities.”</p><p>Both undergraduate and graduate students completed the project over half a semester. Students were tasked with condensing a one- to two-hour oral history into 1,000 words accompanied by artwork they did themselves or used AI to do. Most wrote about their friends and family, but several students wrote about themselves.</p><p>Solórzano said his students enjoyed the project, even becoming emotional as they filled gaps in their family history and connected with their Hispanic heritage. </p><p>“This is new scholarship,” Solórzano said. “[The students] are beginning to understand their human dignity.”</p><p>Ximena Villegas, a 21-year-old Mexican American UF public relations senior, said the project provided a space for Hispanic voices in a place where their stories often go untold. </p><p>“There really isn’t a lot of Hispanic voices in children's literature, especially on topics like immigration and migration stories,” Villegas said. “[This project] gave an opportunity to expose children to it but in a positive light.”</p><p>Villegas wrote about her grandfather Jose Villegas who traveled from Guanajuato, Mexico, to Texas in 1966. She said the project helped her learn more about her grandfather’s struggles and become closer to her family.</p><p>“This was a creative approach to helping younger generations understand the experiences and sacrifices that others in their life may have made,” Villegas said. </p><p>She also wrote in an email the project allowed her to “gain a more humanized insight into a community that is sometimes perceived in a negative way.” </p><p>Sonia San Juan, a doctoral student from Spain, wrote about Ericka Ghersi, president of Gainesville’s Latina Women’s League. Ghersi fled the violence of Peru and landed in Ohio where she was shocked by a new culture and isolated by the lack of knowledge people had about her home country.</p><p>San Juan, who came to the U.S. when she was 17, said Ghersi’s story mirrored some of her own experiences. She said the project’s concept was like “self-help literature for kids,” showing young immigrants trying to adjust to a new culture they’re not alone. </p><p>San Juan said the project could also be beneficial for non-immigrant children.</p><p>“The sooner you get to introduce new ideas, new thoughts to other people, the better,” she said. “It's important to reach to that community, to the younger Spanish speakers and English speakers that might be interested in what other people are doing.”</p><p>Gemma Garcia-Gijon, a 20-year-old UF political science and sociology senior, said writing about her father’s experience migrating from Oaxaca, Mexico, to Florida helped her feel closer to her Hispanic culture. She said Hispanic people born and raised in the U.S. like her often struggle with feeling authentically Hispanic, but this project helped her identify parts of her Hispanic culture in her American life she didn’t notice before. </p><p>“There was still aspects that I grew up around that, in a way, are very similar to the way my cousins in Mexico grew up,” Garcia-Gijon said. “That was really nice to see.”</p><p>Garcia-Gijon said the project showed how important representation is, especially for children.</p><p>As a Hispanic person growing up in the U.S., she said “knowing the struggles and the amount of things [our ancestors] had to do to adapt to a new country” is important to learn about. </p><p>While Hispanic voices receive better representation now, she said there’s still work to be done.</p><p> “The immigrant experience still continues to be a bit stigmatized,” she said. </p><p>Other professors across the country have expressed interest in replicating the children’s book project, and two people have shown interest in publishing the stories, according to Rafael Solórzano, the professor leading the project. </p><p>He said he’s planning on revising the stories and editing them into a volume of children’s books. </p><p>An event will be hosted in September where students from the class will read the books to children. The event is still in the planning stage, and no date has been set, Solórzano said.</p><p>If plans for the event move forward, Garcia-Gijon said the project will be doing good work even at just the local level. </p><p>“Gainesville has a lot of young Hispanic minds that need nourishment. They need to know that their experiences and their families' experiences are valid and should be learned about,” she said. “It's never too late to embrace that part of our identity.</p>", // Paste FORMATED and MINIFIED article text here
    body_es: "<p> </p>"
    };

    const parent = document.querySelector("#articleContainer");

    
    parent.querySelector('#articleTitleEN').innerText = myArticle.headline_en;
    parent.querySelector('#articleSubtitleEN').innerText = myArticle.subtitle_en;
    parent.querySelector('#articleTitleES').innerText = myArticle.headline_es;
    parent.querySelector('#articleSubtitleES').innerText = myArticle.subtitle_es;
    parent.querySelector('#articleAuthorEN').innerText = myArticle.author_one;
    parent.querySelector('#articleAuthorES').innerText = myArticle.author_one;

    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAuthorEN').innerHTML += ' and ' + myArticle.author_two;
    }
    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAuthorES').innerHTML += ' y ' + myArticle.author_two;
    }
    if (myArticle.translator.length > 4) {
        parent.querySelector('#articleTranslator').innerHTML =  myArticle.translator;
    }

    parent.querySelector('#articleDateEN').innerText = 'Monday, Jul. 28, 2024';
    parent.querySelector('#articleDateES').innerText = 'Lunes, Jul. 28, 2024';
    parent.querySelector('#articleCardImageEN').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleCardImageES').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleBodyEN').innerHTML = myArticle.body_en;
    parent.querySelector('#articleAboutEN').innerText = myArticle.about_one_en;
    parent.querySelector('#articleBodyES').innerHTML = myArticle.body_es;
    parent.querySelector('#articleAboutES').innerText = myArticle.about_one_es;


    parent.querySelector('#articleContactEN').innerHTML = myArticle.contact_one_en;
    parent.querySelector('#articleContactES').innerHTML = myArticle.contact_one_es;
    if (myArticle.contact_one_en.length > 4) {
        parent.querySelector('#articleContactEN').innerHTML += ' \n' + myArticle.contact_two_en;
    }
    if (myArticle.contact_one_es.length > 4) {
        parent.querySelector('#articleContactES').innerHTML += ' \n' + myArticle.contact_two_es;
    }
    

    parent.querySelector('#articleCardCaptionEN').style.display = "block";
    parent.querySelector('#articleCardCaptionES').style.display = "block";


    if (myArticle.card_caption_en) {
        parent.querySelector('#articleCardCaptionEN').innerText = myArticle.card_caption_en;
    } else {
        parent.querySelector('#articleCardCaptionEN').style.display = "none";
    }
    if (myArticle.card_caption_en) {
        parent.querySelector('#articleCardCaptionES').innerText = myArticle.card_caption_es;
    } else {
        parent.querySelector('#articleCardCaptionES').style.display = "none";
    }    


    if (myArticle.about_two_en.length > 4) {
        parent.querySelector('#articleAboutEN').innerHTML += '<br><br>' + myArticle.about_two_en;
    }
    if (myArticle.about_two_es.length > 4) {
        parent.querySelector('#articleAboutES').innerHTML += '<br><br>' + myArticle.about_two_es;
    }

    

    

    window.location.hash = myArticle.slug;

    myModal.show();
}, false);

document.getElementById('mary-cruz').addEventListener('click', function() {
    const myArticle = {
        slug: "MaryCruz",
    headline_en: "Painting a path to peace ",
    headline_es: "",
    subtitle_en: "24-year-old artist reflects on her harrowing journey to self-love and kinship",
    subtitle_es: "",
    card_path: ".jpg", 

        card_caption_en: "",
        card_caption_es: "",
        author_one: "Noor Sukkar",
    author_two: "",
    translator: "",
    contact_one_en: "Contact Noor Sukkar at nsukkar@alligator.org. Follow her on X @noorsukkarr.",
    contact_two_en: "",
    contact_one_es: "",
    contact_two_es: "",
    about_one_en: "",
    about_two_en: "",
    about_one_es: "",
    about_two_es: "",
    date: "", 
    desc_en: "",
    desc_es: "",
    body_en: "<p> In the rural valleys of Mexico, the sun embraces the flora and fauna coloring the landscape. Young children breeze through trees as the wind carries the echoes of their laughter. Avocados cling on to the drooping branches as their youthful green tassels with a ripening wave of brown. </p><p>Sitting below with her younger cousins, MaryCruz Ruiz immortalizes the moment in her oil painting titled “The Return.”</p><p>“We just sat there together and we were all giggly, and it felt like I was back home,” Ruiz said.</p><p>At 24 years old, Ruiz has embarked on a two-month trip to Mexico to deepen the connection to her roots. However, the second-generation immigrant tackled years of trial and error prior to honing in on her artistic craft and rekindling familial relationships.</p><p>“There was never a point where I wasn’t drawing or making art, it was always present,” she said.</p><p>Yet there was a point she felt she had to stray away. </p><p>After graduating high school in Kissimmee, she drove to Pikes Peak State College, nearly 2,000 miles away from friends and family. While the longing for landscapes besides “concrete jungle, Disney and big corporate” played a role in the decision, guilt and a fear of failure pushed her as well. </p><p>She chose to study architectural design. </p><p> “While they [her family] work so hard for me to get here,” she said. “It can be disappointing for your family to want to go down a creative path, so I strayed away from that for a while.”</p><p>Working a full-time job and lacking self-care, the pressures of fulfilling someone else’s quota caught up. At 19, she felt she had one of the biggest existential crises of her life.</p><p>“It had just gotten so low that I could not allow myself to get any lower,” she said. “I didn’t know who I was.”</p><p>So she dropped out of college. </p><p>That decision is only one of many reroutes that kickstarted a spiritual awakening. She started working at the Cheyenne Mountain Zoo and made an active effort to completely reconstruct herself to be in balance with the planet, she said. </p><p>Over the next two years, the mountainous terrain and natural landscape of Colorado Springs inspired and fostered her growth in its art community.</p><p></p><p>“I just fell in love with our planet,” she said. “I was able to sow the seeds for learning how to love myself, building a deeper respect for myself, and learning how to value my mind, body and spirit.”</p><p>Between this newfound connection to agriculture and a longing to rekindle her relationship with her parents, she moved to Gainesville and began working at Frog Song Organics Farm at 21 years old. </p><p>“A lot of my pieces at the time were very emotional and very philosophical,” she said. “I was going through a lot of emotional turmoil. I just moved to a new place. I was feeling very alone.”</p><p>As the years passed, her early twenties were spent investing and adapting herself into different positions and work. In 2021, her path happened to cross that of David Coombs at a local music event, who she would ultimately start dating.</p><p>“I was personally going through some of the hardest times in my life… and here’s this vibrant soul telling me, ‘I see you have a dream. I see a path, tell me about it,’” Coombs said. “[She] just lit my soul on fire.”</p><p>Also new to Gainesville, Coombs left behind a 20-year construction career to pursue music. Ruiz’s genuine encouragement as a stranger omitted more faith than he had in himself. The artists bonded over many similarities and struggles.</p><p>“I could go on for hours about how proud of her I am and I just see her work really hard and never complain about it,” he said. “She’s just extremely resilient for the sake of her own betterment and for the sake of the impression she leaves on other people because she knows it's important.” </p><p>In her time living in Gainesville, Ruiz sold her art in pop-up markets like the How Bazar and displayed pieces in galleries. </p><p>“As soon as I started reaching out to How Bazar, reaching out to other pop ups, getting to know people and making art with people,” Ruiz said. “Gainesville just had open arms. I was not expecting that deep acceptance that I had received.”</p><p>Her doubts were dispelled by Gainesville’s embrace, and her presence lingered longer than the short period of time she lived there. Her high school best friend, Cristina Ortez, remembered a time she visited Ruiz in Gainesville for her birthday party, and said the experience showed how fondly Ruiz is received.</p><p>“We got to meet so many different people that she brought together,” Ortez said. “A lot of them didn’t know each other, but they all came here for Mary. It just shows how loved she is.”</p><p>Ortez met Ruiz at a private Catholic high school in Orlando. Ortez, whose artwork draws from her synesthesia, a condition which allows her to see color in emotions and sounds, related to Ruiz in many ways. For one, they often bonded over creating art together. But the Nicaraguan 26-year-old also shared in the struggles of being a minority.</p><p>“It was just this shared feeling of having to whitewash ourselves, and it wasn’t until I went off to college and she left school that we started growing into ourselves as people,” she said. “I can see that in her art. She’s using herself as a muse instead of hiding as we were made to feel.”</p><p>At the start of the summer, Ruiz returned to Haines City, Florida, where her Mexican parents live. She’s devoted her time to helping her family’s floral shop, Haines City Flowers.</p><p>“My parents and family just had insanely difficult lives — trying to grow out of poverty, become citizens, start their own business, support a family,” she said. “My life would have been so different if I had just been born a country away, and there’s a lot of gratitude for that.”</p><p>As she packs portable canvases and her oil paints to Mexico, she looks forward to taking a step outside of her routine life. With time as her most valuable resource, her pursuit of peace and growth strides on.</p><p>“I have the freedom to make art. I have the freedom to be queer. I can express myself without fear. That gives me a lot of fire in my soul to find my fullest potential creatively.” she said. “It almost feels like I am healing myself but also my ancestors and my past family members who haven’t had that opportunity.”</p>", // Paste FORMATED and MINIFIED article text here
    body_es: "<p> </p>"
    };

    const parent = document.querySelector("#articleContainer");

    
    parent.querySelector('#articleTitleEN').innerText = myArticle.headline_en;
    parent.querySelector('#articleSubtitleEN').innerText = myArticle.subtitle_en;
    parent.querySelector('#articleTitleES').innerText = myArticle.headline_es;
    parent.querySelector('#articleSubtitleES').innerText = myArticle.subtitle_es;
    parent.querySelector('#articleAuthorEN').innerText = myArticle.author_one;
    parent.querySelector('#articleAuthorES').innerText = myArticle.author_one;

    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAuthorEN').innerHTML += ' and ' + myArticle.author_two;
    }
    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAuthorES').innerHTML += ' y ' + myArticle.author_two;
    }
    if (myArticle.translator.length > 4) {
        parent.querySelector('#articleTranslator').innerHTML =  myArticle.translator;
    }

    parent.querySelector('#articleDateEN').innerText = 'Monday, Jul. 28, 2024';
    parent.querySelector('#articleDateES').innerText = 'Lunes, Jul. 28, 2024';
    parent.querySelector('#articleCardImageEN').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleCardImageES').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleBodyEN').innerHTML = myArticle.body_en;
    parent.querySelector('#articleAboutEN').innerText = myArticle.about_one_en;
    parent.querySelector('#articleBodyES').innerHTML = myArticle.body_es;
    parent.querySelector('#articleAboutES').innerText = myArticle.about_one_es;


    parent.querySelector('#articleContactEN').innerHTML = myArticle.contact_one_en;
    parent.querySelector('#articleContactES').innerHTML = myArticle.contact_one_es;
    if (myArticle.contact_one_en.length > 4) {
        parent.querySelector('#articleContactEN').innerHTML += ' \n' + myArticle.contact_two_en;
    }
    if (myArticle.contact_one_es.length > 4) {
        parent.querySelector('#articleContactES').innerHTML += ' \n' + myArticle.contact_two_es;
    }
    

    parent.querySelector('#articleCardCaptionEN').style.display = "block";
    parent.querySelector('#articleCardCaptionES').style.display = "block";


    if (myArticle.card_caption_en) {
        parent.querySelector('#articleCardCaptionEN').innerText = myArticle.card_caption_en;
    } else {
        parent.querySelector('#articleCardCaptionEN').style.display = "none";
    }
    if (myArticle.card_caption_en) {
        parent.querySelector('#articleCardCaptionES').innerText = myArticle.card_caption_es;
    } else {
        parent.querySelector('#articleCardCaptionES').style.display = "none";
    }    


    if (myArticle.about_two_en.length > 4) {
        parent.querySelector('#articleAboutEN').innerHTML += '<br><br>' + myArticle.about_two_en;
    }
    if (myArticle.about_two_es.length > 4) {
        parent.querySelector('#articleAboutES').innerHTML += '<br><br>' + myArticle.about_two_es;
    }

    

    

    window.location.hash = myArticle.slug;

    myModal.show();
}, false);

document.getElementById('paloma-pena').addEventListener('click', function() {
    const myArticle = {
        slug: "",
    headline_en: "Paloma Peña represents larger Dominican soccer movement on world stage",
    headline_es: "Paloma Peña representa un movimiento de futbol dominicano en un escenario mundial ",
    subtitle_en: "The Florida goalkeeper played in February’s CONCACAF Gold Cup and hopes to create soccer-focused momentum in the Dominican Republic",
    subtitle_es: "La goleadora de la UF jugó en la CONCACAF Copa de Oro en febrero y espera crear un impulso centrado en el fútbol en la República Dominicana",
    card_path: ".jpg", 

        card_caption_en: "",
        card_caption_es: "",
        author_one: "Liana Handler",
    author_two: "",
    translator: "",
    contact_one_en: "Contact Liana Handler at lhandler@alligator.org. Follow her on Twitter @handlerliana.",
    contact_two_en: "",
    contact_one_es: "Contacta a Liana Handler por lhandler@alligator.org. Síguela en X @handlerliana.",
    contact_two_es: "Traducido por Isabella Rivera. Contáctala por isabellarivera@ufl.edu. Síguela en X @isa_rivera_.",
    about_one_en: "",
    about_two_en: "",
    about_one_es: "",
    about_two_es: "",
    date: "", 
    desc_en: "",
    desc_es: "",
    body_en: "<p>Florida sophomore goalkeeper Paloma Peña received an unforgettable 19th birthday gift: a penalty kick against soccer phenomenon Alex Morgan during February’s CONCACAF Gold Cup group stage.</p><p>Before the match in Carson, California, Peña’s teammates on the Dominican Republic women’s national team surprised her with cake and balloons. Then, with about 25 deep breaths to steady herself, she marched onto the field. </p><p>Just a year ago, Peña was a fan watching the U.S. team play from the Inter Miami stands. But during February’s game, her allegiance was to her teammates on the Dominican squad, she said.</p><p>She didn’t save Morgan’s penalty, but Peña said it was surreal competing against her idols.</p><p>“I remember the whistle blew to start the game, and I was thinking, ‘Am I in a video game right now?’” Peña said. “We told each other to have fun because we knew there was a very slim chance of us winning.”</p><p>Peña is one of four goalkeepers for the Florida Gators women’s soccer team. Though she has yet to don the orange and blue, she embodies the rising soccer movement in the Dominican Republic.</p><p>Historically, baseball dominates the Caribbean nation. All 30 MLB teams have baseball academies in the country and superstars such as David Ortiz, Pedro Martinez and Juan Soto call the island home. </p><p>However, there has been a shift to elevate soccer as a national sport. The Dominican Republic men’s national team will compete in the Olympics Aug. 24 for the first time since 2008. </p><p>Additionally, the Dominican Football Federation announced the country would host the FIFA Women’s U-17 World Cup later this year.</p><p>Even though soccer has increased in popularity over the last few years, American-born Dominican players continue to face internal challenges. Some believe Americans who claim Dominican heritage shouldn’t be able to play for the team.</p><p>With each of her Instagram posts about the Dominican women’s soccer team, Peña said she knows there’s a chance someone might criticize her for her birthplace. Despite this, she still wants to be a part of the movement to represent her culture in international play.</p><p>“We're really trying to get that ball rolling so that there's a better future for the future generations for the D.R. and Dominican girls in the U.S. who also want to play for that team,” Peña said. “We want to represent…ourselves, so I don't see why there's people being hesitant.”</p><p>Back in the U.S., Florida’s goalkeeper coach, Austin O’Connor, anxiously watched the CONCACAF match hoping Peña would construct a quality performance.</p><p>However, against prolific talent such as the U.S., goalkeepers tend to see more action, and Peña rose to the occasion with 16 saves during group play. </p><p>Despite her dominant skill, Peña said she struggled with low confidence at times. Earlier in the year, she was hit by a ball in her face and it took her time to work back to where she was before.</p><p>“You got to be brave, courageous,” she said. “You got to be willing to not only put your voice out there, but your whole body.”</p><p>Peña joined the Gators soccer team in 2023, and within her first season, she worked with assistant head coach Austin O’Connor. </p><p>“I know her team was a little outmatched in those three games,” O’Connor said. “You don't want her to go on this world stage and have a poor experience. You want to have a really good experience, which she did.”</p><p>A goalkeeper’s job is one of the most selfless positions on the field, he said. It’s a game of odds, and most times it’s stacked against the athlete, he said. There’s only so much room a goalkeeper can take up physically.</p><p>“It doesn't really matter how big you are as a player, that goal is just so much bigger,” he said. “You can't save 100% of the shots that are taken on you.”</p><p>O’Connor didn’t know what to expect, but Pena brought a contagious energy and has a high potential, he said.</p><p>“I want to see her on the field,” O’Connor said. “I have tons of hope and tons of faith that she'll do that.”</p><p>Florida graduate defender Emilee Hauser loved playing with Peña, particularly because of her encouragement of teammates and dedication to the game.</p><p>“She is a positive energy,” Hauser said. “She's not afraid to talk to me and tell me what I need to hear even though I am older.”</p><p>Hauser’s favorite memory of Peña’s energy was during a shooting drill in the spring. The team fired continuous shots on goal, and after one of her saves, Peña stood up and screamed.</p><p>O’Connor and one of her fellow goalkeepers, sophomore Jayden Emmanuel, sprinted to her for a chest bump.</p><p>“It just made everyone laugh,” Hauser said.</p><p>Hauser said she never would have guessed that Peña struggled with confidence, especially after representing the Dominican Republic during the game against the U.S.</p><p>“She's played in a huge game,” she said. “She played in the Gold Cup with the Dominican Republic, and she didn't act like this was the first game she's ever played for her country.”</p><p>The Dominican women’s team fell to the U.S. 5-0 and failed to secure a spot in Paris. However, the Caribbean nation’s men’s team will compete in their first Olympic game in over a decade.</p><p>Peña will be rooting for both teams but said she hopes to be in goal during a World Cup or an Olympic game one day. She believes her time on the field isn’t far away.</p><p>“This is a movement that's going to happen, and it's going to be amazing,” Peña said. “I cannot wait to see what Dominican women's soccer looks like.”</p>", // Paste FORMATED and MINIFIED article text here
    body_es: "<p>La estudiante de segundo año y goleadora en la UF Paloma Peña recibió un regalo de cumpleaños inolvidable para sus 19: un penal contra el fenómeno del fútbol femenino Alex Morgan durante la CONCACAF Copa de Oro en la fase de grupos. </p><p>Antes del partido en Carson, California, las compañeras de Peña en el equipo nacional femenino de la República Dominicana la sorprendieron con pastel y globos. Después, con cerca de 25 respiraciones profundas para estabilizarse, marchó al campo.  </p><p>Hace solo un año, Peña era una fanática mirando el equipo de los Estados Unidos jugar desde las gradas del estadio de Inter Miami. Pero durante el juego en febrero, su lealtad era hacia sus compañeras en la escuadra dominicana, ella dice. </p><p>No salvo el penal de Morgan, pero Peña dice que fue surreal competir contra sus ídolos. </p><p>“Recuerdo que el pito sonó al principio del juego, y estaba pensando, ‘Estoy en un videojuego ahora mismo?’” dijo Peña. “Nos dijimos uno al otro que había que disfrutar porque sabíamos que había muy poca probabilidad de que ganaramos.” </p><p>Peña es una de las cuatro goleadoras del equipo de fútbol femenino de los Gators de Florida. Aunque todavía le falta ponerse el naranja y el azul, ella encarna el creciente movimiento futbolístico en la República Dominicana. </p><p>Históricamente, el béisbol domina el país del Caribe: cada uno de los 30 equipos de la MLB tienen una academia en el país y superestrellas como David Ortiz, Pedro Martinez y Juan Soto llaman a hogar la isla. </p><p>Sin embargo, ha habido un cambio para elevar el fútbol como el deporte nacional. La selección masculina de República Dominicana competirá en las olimpiadas el 24 de agosto por primera vez desde 2008. Adicionalmente, la Federación de Fútbol Dominicano anunció que el país será anfitrión de la Copa Mundial Femenino U17 este año. </p><p>Aunque el fútbol ha aumentado en popularidad en los últimos años, jugadores Dominicanos nacidos en los Estados Unidos siguen enfrentando desafíos internos. Algunos piensan que los americanos que reclaman herencia dominicana no deberían poder jugar para el equipo nacional. </p><p> Con cada una de sus publicaciones siendo sobre el equipo femenino dominicano, Peña dice que ella sabe que hay probabilidad que alguien pueda criticarlos por su lugar de nacimiento. A pesar de esto, ella todavía quiere ser parte del movimiento de representar su cultura en juego internacional. </p><p> “Realmente estamos intentando hacer rodar esa bola para que haya un futuro mejor para las generaciones futuras para la República Dominicana y niñas dominicanas en los Estados Unidos que también quieren jugar para ese equipo,” dijo Peña. “Queremos representarnos, entonces no veo porque hay personas siendo vacilantes.” </p><p>En los Estados Unidos, el entrenador de porteros de Florida, Austin O’Connor, observó ansiosamente el partido CONCACAF esperando que Peña construyera una ejecución de calidad. </p><p>Contra talento prolífico tal como el de los Estados Unidos, los porteros tienden a ver más acción. Peña estuvo a la altura de las circunstancias con 16 paradas durante la fase de grupos. </p><p>A pesar de su habilidad dominante, Peña dice que a veces luchó contra la baja autoestima. A principios del año, fue golpeada por una pelota en la cara y le tomó tiempo trabajar para volver a donde estaba antes. </p><p>“Tienes que ser valiente”, ella dijo. “Tienes que estar dispuesto a no solo usar tu voz sino tu cuerpo entero”. </p><p>Peña se unió al equipo de fútbol de los Gators en el 2023, y en su primera temporada trabajó con el entrenador asistente Austin O’Connor. </p><p>“Sé que su equipo fue un poco superado en esos tres juegos,” dijo O’Connor. “No quieres que ella salga a ese escenario global y tenga una mala experiencia. Quieres tener una muy buena experiencia, y la tuvo.” </p><p>El trabajo del portero es una de las posiciones más abnegadas en el campo, él dijo. Es un juego de posibilidades y muchas de las veces, está en contra del atleta, dijo. El espacio que un portero puede ocupar físicamente es muy pequeño. </p><p>“No importa que tan grande eres como jugador, el gol es mucho más grande,” él dijo. “No puedes salvar el 100% de los tiros que son asumidos sobre ti.” </p><p>O’Connor no sabia que esperar, pero Peña trajo una energía contagiosa y tiene un potencial alto, dijo. </p><p>“La quiero ver en el campo. Tengo mucha esperanza y fe de que ella lo hará”, dijo O’Connor. </p><p>A la jugadora de defensa graduada de Florida Emilee Hauser le encantó jugar con Peña, particularmente por su aliento de compañeras y dedicación al juego. </p><p>“Ella es una energía positiva”, dijo Hauser. “No le tiene miedo a hablarme y decirme lo que tengo que escuchar aunque yo sea mayor”.</p><p>La memoria favorita de Hauser sobre la energía de Peña fue durante un simulacro de tiro en la primavera. El equipo disparó continuos tiros al arco y después de una de sus paradas, Peña se levantó y gritó. </p><p>O’Connor y una de sus compañeras portera, la estudiante de segundo año Jayden Emmanuel, corrió hacia ella para un golpe de pecho. </p><p>“Solo hizo a todo el mundo reír”, dijo Hauser. </p><p>Hauser dice que ella nunca hubiera adivinado que Peña luchaba con su autoestima, especialmente después de representar a la República Dominicana en un juego contra los Estados Unidos. </p><p>“Ella ha jugado en un gran juego”, dijo. “Ella jugó en la Copa de Oro con la República Dominicana, y no actuó como si fuera el primer juego que ha jugado para su país”. </p><p>El equipo feminino dominicano fue vencido por los Estados Unidos 5-0 y no pudo asegurar un espacio en París. Sin embargo, el equipo masculino de la nación caribeña competirá en su primer juego olímpico en más de una década. </p><p>Peña estará apoyando a ambos equipos pero dice que espera estar en el gol durante un Mundial o juego Olímpico algún día. Ella cree que su tiempo en el campo no está lejos. </p><p>“Este es un movimiento que va a ocurrir, y va hacer maravilloso”, Peña dijo. “No puedo esperar a ver cómo será el fútbol femenino dominicano”.</p>"
    };

    const parent = document.querySelector("#articleContainer");

    
    parent.querySelector('#articleTitleEN').innerText = myArticle.headline_en;
    parent.querySelector('#articleSubtitleEN').innerText = myArticle.subtitle_en;
    parent.querySelector('#articleTitleES').innerText = myArticle.headline_es;
    parent.querySelector('#articleSubtitleES').innerText = myArticle.subtitle_es;
    parent.querySelector('#articleAuthorEN').innerText = myArticle.author_one;
    parent.querySelector('#articleAuthorES').innerText = myArticle.author_one;

    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAuthorEN').innerHTML += ' and ' + myArticle.author_two;
    }
    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAuthorES').innerHTML += ' y ' + myArticle.author_two;
    }
    if (myArticle.translator.length > 4) {
        parent.querySelector('#articleTranslator').innerHTML =  myArticle.translator;
    }

    parent.querySelector('#articleDateEN').innerText = 'Monday, Jul. 28, 2024';
    parent.querySelector('#articleDateES').innerText = 'Lunes, Jul. 28, 2024';
    parent.querySelector('#articleCardImageEN').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleCardImageES').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleBodyEN').innerHTML = myArticle.body_en;
    parent.querySelector('#articleAboutEN').innerText = myArticle.about_one_en;
    parent.querySelector('#articleBodyES').innerHTML = myArticle.body_es;
    parent.querySelector('#articleAboutES').innerText = myArticle.about_one_es;


    parent.querySelector('#articleContactEN').innerHTML = myArticle.contact_one_en;
    parent.querySelector('#articleContactES').innerHTML = myArticle.contact_one_es;
    if (myArticle.contact_one_en.length > 4) {
        parent.querySelector('#articleContactEN').innerHTML += ' \n' + myArticle.contact_two_en;
    }
    if (myArticle.contact_one_es.length > 4) {
        parent.querySelector('#articleContactES').innerHTML += ' \n' + myArticle.contact_two_es;
    }
    

    parent.querySelector('#articleCardCaptionEN').style.display = "block";
    parent.querySelector('#articleCardCaptionES').style.display = "block";


    if (myArticle.card_caption_en) {
        parent.querySelector('#articleCardCaptionEN').innerText = myArticle.card_caption_en;
    } else {
        parent.querySelector('#articleCardCaptionEN').style.display = "none";
    }
    if (myArticle.card_caption_en) {
        parent.querySelector('#articleCardCaptionES').innerText = myArticle.card_caption_es;
    } else {
        parent.querySelector('#articleCardCaptionES').style.display = "none";
    }    


    if (myArticle.about_two_en.length > 4) {
        parent.querySelector('#articleAboutEN').innerHTML += '<br><br>' + myArticle.about_two_en;
    }
    if (myArticle.about_two_es.length > 4) {
        parent.querySelector('#articleAboutES').innerHTML += '<br><br>' + myArticle.about_two_es;
    }

    

    

    window.location.hash = myArticle.slug;

    myModal.show();
}, false);

document.getElementById('').addEventListener('click', function() {
    const myArticle = {
        slug: "",
    headline_en: "",
    headline_es: "",
    subtitle_en: "",
    subtitle_es: "",
    card_path: ".jpg", 

        card_caption_en: "",
        card_caption_es: "",
        author_one: "",
    author_two: "",
    translator: "",
    contact_one_en: "",
    contact_two_en: "",
    contact_one_es: "",
    contact_two_es: "",
    about_one_en: "",
    about_two_en: "",
    about_one_es: "",
    about_two_es: "",
    date: "", 
    desc_en: "",
    desc_es: "",
    body_en: "<p> </p>", // Paste FORMATED and MINIFIED article text here
    body_es: "<p> </p>"
    };

    const parent = document.querySelector("#articleContainer");

    
    parent.querySelector('#articleTitleEN').innerText = myArticle.headline_en;
    parent.querySelector('#articleSubtitleEN').innerText = myArticle.subtitle_en;
    parent.querySelector('#articleTitleES').innerText = myArticle.headline_es;
    parent.querySelector('#articleSubtitleES').innerText = myArticle.subtitle_es;
    parent.querySelector('#articleAuthorEN').innerText = myArticle.author_one;
    parent.querySelector('#articleAuthorES').innerText = myArticle.author_one;

    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAuthorEN').innerHTML += ' and ' + myArticle.author_two;
    }
    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAuthorES').innerHTML += ' y ' + myArticle.author_two;
    }
    if (myArticle.translator.length > 4) {
        parent.querySelector('#articleTranslator').innerHTML =  myArticle.translator;
    }

    parent.querySelector('#articleDateEN').innerText = 'Monday, Jul. 28, 2024';
    parent.querySelector('#articleDateES').innerText = 'Lunes, Jul. 28, 2024';
    parent.querySelector('#articleCardImageEN').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleCardImageES').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleBodyEN').innerHTML = myArticle.body_en;
    parent.querySelector('#articleAboutEN').innerText = myArticle.about_one_en;
    parent.querySelector('#articleBodyES').innerHTML = myArticle.body_es;
    parent.querySelector('#articleAboutES').innerText = myArticle.about_one_es;


    parent.querySelector('#articleContactEN').innerHTML = myArticle.contact_one_en;
    parent.querySelector('#articleContactES').innerHTML = myArticle.contact_one_es;
    if (myArticle.contact_one_en.length > 4) {
        parent.querySelector('#articleContactEN').innerHTML += ' \n' + myArticle.contact_two_en;
    }
    if (myArticle.contact_one_es.length > 4) {
        parent.querySelector('#articleContactES').innerHTML += ' \n' + myArticle.contact_two_es;
    }
    

    parent.querySelector('#articleCardCaptionEN').style.display = "block";
    parent.querySelector('#articleCardCaptionES').style.display = "block";


    if (myArticle.card_caption_en) {
        parent.querySelector('#articleCardCaptionEN').innerText = myArticle.card_caption_en;
    } else {
        parent.querySelector('#articleCardCaptionEN').style.display = "none";
    }
    if (myArticle.card_caption_en) {
        parent.querySelector('#articleCardCaptionES').innerText = myArticle.card_caption_es;
    } else {
        parent.querySelector('#articleCardCaptionES').style.display = "none";
    }    


    if (myArticle.about_two_en.length > 4) {
        parent.querySelector('#articleAboutEN').innerHTML += '<br><br>' + myArticle.about_two_en;
    }
    if (myArticle.about_two_es.length > 4) {
        parent.querySelector('#articleAboutES').innerHTML += '<br><br>' + myArticle.about_two_es;
    }

    

    

    window.location.hash = myArticle.slug;

    myModal.show();
}, false);

document.getElementById('').addEventListener('click', function() {
    const myArticle = {
        slug: "",
    headline_en: "",
    headline_es: "",
    subtitle_en: "",
    subtitle_es: "",
    card_path: ".jpg", 

        card_caption_en: "",
        card_caption_es: "",
        author_one: "",
    author_two: "",
    translator: "",
    contact_one_en: "",
    contact_two_en: "",
    contact_one_es: "",
    contact_two_es: "",
    about_one_en: "",
    about_two_en: "",
    about_one_es: "",
    about_two_es: "",
    date: "", 
    desc_en: "",
    desc_es: "",
    body_en: "<p> </p>", // Paste FORMATED and MINIFIED article text here
    body_es: "<p> </p>"
    };

    const parent = document.querySelector("#articleContainer");

    
    parent.querySelector('#articleTitleEN').innerText = myArticle.headline_en;
    parent.querySelector('#articleSubtitleEN').innerText = myArticle.subtitle_en;
    parent.querySelector('#articleTitleES').innerText = myArticle.headline_es;
    parent.querySelector('#articleSubtitleES').innerText = myArticle.subtitle_es;
    parent.querySelector('#articleAuthorEN').innerText = myArticle.author_one;
    parent.querySelector('#articleAuthorES').innerText = myArticle.author_one;

    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAuthorEN').innerHTML += ' and ' + myArticle.author_two;
    }
    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAuthorES').innerHTML += ' y ' + myArticle.author_two;
    }
    if (myArticle.translator.length > 4) {
        parent.querySelector('#articleTranslator').innerHTML =  myArticle.translator;
    }

    parent.querySelector('#articleDateEN').innerText = 'Monday, Jul. 28, 2024';
    parent.querySelector('#articleDateES').innerText = 'Lunes, Jul. 28, 2024';
    parent.querySelector('#articleCardImageEN').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleCardImageES').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleBodyEN').innerHTML = myArticle.body_en;
    parent.querySelector('#articleAboutEN').innerText = myArticle.about_one_en;
    parent.querySelector('#articleBodyES').innerHTML = myArticle.body_es;
    parent.querySelector('#articleAboutES').innerText = myArticle.about_one_es;


    parent.querySelector('#articleContactEN').innerHTML = myArticle.contact_one_en;
    parent.querySelector('#articleContactES').innerHTML = myArticle.contact_one_es;
    if (myArticle.contact_one_en.length > 4) {
        parent.querySelector('#articleContactEN').innerHTML += ' \n' + myArticle.contact_two_en;
    }
    if (myArticle.contact_one_es.length > 4) {
        parent.querySelector('#articleContactES').innerHTML += ' \n' + myArticle.contact_two_es;
    }
    

    parent.querySelector('#articleCardCaptionEN').style.display = "block";
    parent.querySelector('#articleCardCaptionES').style.display = "block";


    if (myArticle.card_caption_en) {
        parent.querySelector('#articleCardCaptionEN').innerText = myArticle.card_caption_en;
    } else {
        parent.querySelector('#articleCardCaptionEN').style.display = "none";
    }
    if (myArticle.card_caption_en) {
        parent.querySelector('#articleCardCaptionES').innerText = myArticle.card_caption_es;
    } else {
        parent.querySelector('#articleCardCaptionES').style.display = "none";
    }    


    if (myArticle.about_two_en.length > 4) {
        parent.querySelector('#articleAboutEN').innerHTML += '<br><br>' + myArticle.about_two_en;
    }
    if (myArticle.about_two_es.length > 4) {
        parent.querySelector('#articleAboutES').innerHTML += '<br><br>' + myArticle.about_two_es;
    }

    

    

    window.location.hash = myArticle.slug;

    myModal.show();
}, false);

document.getElementById('').addEventListener('click', function() {
    const myArticle = {
        slug: "",
    headline_en: "",
    headline_es: "",
    subtitle_en: "",
    subtitle_es: "",
    card_path: ".jpg", 

        card_caption_en: "",
        card_caption_es: "",
        author_one: "",
    author_two: "",
    translator: "",
    contact_one_en: "",
    contact_two_en: "",
    contact_one_es: "",
    contact_two_es: "",
    about_one_en: "",
    about_two_en: "",
    about_one_es: "",
    about_two_es: "",
    date: "", 
    desc_en: "",
    desc_es: "",
    body_en: "<p> </p>", // Paste FORMATED and MINIFIED article text here
    body_es: "<p> </p>"
    };

    const parent = document.querySelector("#articleContainer");

    
    parent.querySelector('#articleTitleEN').innerText = myArticle.headline_en;
    parent.querySelector('#articleSubtitleEN').innerText = myArticle.subtitle_en;
    parent.querySelector('#articleTitleES').innerText = myArticle.headline_es;
    parent.querySelector('#articleSubtitleES').innerText = myArticle.subtitle_es;
    parent.querySelector('#articleAuthorEN').innerText = myArticle.author_one;
    parent.querySelector('#articleAuthorES').innerText = myArticle.author_one;

    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAuthorEN').innerHTML += ' and ' + myArticle.author_two;
    }
    if (myArticle.author_two.length > 4) {
        parent.querySelector('#articleAuthorES').innerHTML += ' y ' + myArticle.author_two;
    }
    if (myArticle.translator.length > 4) {
        parent.querySelector('#articleTranslator').innerHTML =  myArticle.translator;
    }

    parent.querySelector('#articleDateEN').innerText = 'Monday, Jul. 28, 2024';
    parent.querySelector('#articleDateES').innerText = 'Lunes, Jul. 28, 2024';
    parent.querySelector('#articleCardImageEN').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleCardImageES').setAttribute('src', 'images/' + myArticle.card_path);
    parent.querySelector('#articleBodyEN').innerHTML = myArticle.body_en;
    parent.querySelector('#articleAboutEN').innerText = myArticle.about_one_en;
    parent.querySelector('#articleBodyES').innerHTML = myArticle.body_es;
    parent.querySelector('#articleAboutES').innerText = myArticle.about_one_es;


    parent.querySelector('#articleContactEN').innerHTML = myArticle.contact_one_en;
    parent.querySelector('#articleContactES').innerHTML = myArticle.contact_one_es;
    if (myArticle.contact_one_en.length > 4) {
        parent.querySelector('#articleContactEN').innerHTML += ' \n' + myArticle.contact_two_en;
    }
    if (myArticle.contact_one_es.length > 4) {
        parent.querySelector('#articleContactES').innerHTML += ' \n' + myArticle.contact_two_es;
    }
    

    parent.querySelector('#articleCardCaptionEN').style.display = "block";
    parent.querySelector('#articleCardCaptionES').style.display = "block";


    if (myArticle.card_caption_en) {
        parent.querySelector('#articleCardCaptionEN').innerText = myArticle.card_caption_en;
    } else {
        parent.querySelector('#articleCardCaptionEN').style.display = "none";
    }
    if (myArticle.card_caption_en) {
        parent.querySelector('#articleCardCaptionES').innerText = myArticle.card_caption_es;
    } else {
        parent.querySelector('#articleCardCaptionES').style.display = "none";
    }    


    if (myArticle.about_two_en.length > 4) {
        parent.querySelector('#articleAboutEN').innerHTML += '<br><br>' + myArticle.about_two_en;
    }
    if (myArticle.about_two_es.length > 4) {
        parent.querySelector('#articleAboutES').innerHTML += '<br><br>' + myArticle.about_two_es;
    }

    

    

    window.location.hash = myArticle.slug;

    myModal.show();
}, false);