(function() {


class Popup {
    
  constructor (params) {  
    Object.assign(this, params);
  }
    
  getId(){
      return this.id;
  }
  
  getTitle () {
    return this.title;
  }
  getDetails () {
    return this.details;
  }

  getLinks() {
      return this.links;
  }
//generates list of techs
  generateList() {
        let html = '';
        for (var listItem of this.getDetails().techs){
            html += '<li class="paragraph">'+listItem+'</li>';
        }
        return html;
    }
}
    

//data objects
var prekambrData = {
  id: 'prekambr',
    
  title: {
          main:'Prekambr.pl',
          sub: 'Webpage'
      },
  
  details: {
          desc: 'Project includes RWD design, ajax-based testimonial slider, php contact form, google maps. I think most of concepts which business homepage should to have.',
          techs: ['json','html', 'css', 'js']
      },
  links: {
          code: 'http://prekambr.pl',
          live: 'https://github.com/karpinski1994/prekambr.pl'
        
      }
};
    
var socialData = {
  id: 'social',
    
  title: {
          main:'Social.pl',
          sub: 'Webpage'
      },
  
  details: {
          desc: 'Project includes RWD design, ajax-based testimonial slider, php contact form, google maps. I think most of concepts which business homepage should to have.',
          techs: ['Flex','html', 'css', 'js']
      },
    links: {
          code: 'http://prekambr.pl',
          live: 'https://github.com/karpinski1994/prekambr.pl'
        
      }
    //trzeba dodac linki do hrefow
};
    
var gridData = {
  id: 'grid',
    
  title: {
          main:'grid',
          sub: 'layout'
      },
  
  details: {
          desc: 'During realisation of this project I was mainly focused on developing my knowledge about CSS-Grid.',
          techs: ['Flex','html', 'css', 'js']
      },
    links: {
          code: 'https://github.com/karpinski1994/karpinski1994.github.io/tree/master/websites/photography',
          live: ''
        
      }
    //trzeba dodac linki do hrefow
};
    
var budgetData = {
  id: 'budget',
    
  title: {
          main:'Budget manager',
          sub: 'Angular 4 app'
      },
  
  details: {
          desc: 'Budget manager has 2 modules: main app and history. Main module lets you to add your incomes and outcomes. History module is responsible for storing all operations with date and time.',
          techs: ['Flex','html', 'css', 'js']
      },
    links: {
          code: 'https://github.com/karpinski1994/karpinski1994.github.io/tree/master/websites/photography',
          live: ''
        
      }
    //trzeba dodac linki do hrefow
};

var businessData = {
  id: 'business',
    
  title: {
          main:'Business simulator',
          sub: 'JS Game'
      },
  
  details: {
          desc: 'This was one of my firsts JS projects. I wanted to develop my programming skills: dividing code into modules, encapsulation. And increase my knowledge about vanilla JS. I wated to train practically concepts like clousers, hoisting, prototype chain, lexical scope etc. Originally project includes simple login system and database of players.',
          techs: ['Flex','html', 'css', 'js']
      },
    links: {
          code: 'https://github.com/karpinski1994/karpinski1994.github.io/tree/master/websites/photography',
          live: ''
        
      }
    //trzeba dodac linki do hrefow
};
    
//final objects
    
    
    
//clickam na przycisk
//odpala sie listener
//po evencie przekazuje id
//
    
    
var objects = {
        
        prekambr: new Popup(prekambrData),
        social: new Popup(socialData),
        grid: new Popup(gridData),
        budget: new Popup(budgetData),
        business: new Popup(businessData)
    }
    
    
    
    
    
    
var rendererPopup  = {
    id: '', 
    getId: function(e) {
        let fullId = e.target.id;
        let splittedId = fullId.split('-');
        this.id = splittedId[0];
        let cta = splittedId[1];
        if(cta === 'cta'){
            console.log(objects[this.id]);
            togglePopup( objects[this.id] );
        }
    }
 };
    
const projects = document.querySelector('.projects');
projects.addEventListener('click', rendererPopup.getId);      

function togglePopup(obj) {
    let html = `<div class="popup" id="popup-project-1"><div class="popup__content"><div class="popup__left"><img class="popup__img" src="img/${obj.getId()}-2.jpg" alt="Masonry Website"><img class="popup__img" src="img/${obj.getId()}-3.jpg" alt="Prekambr website"></div><div class="popup__right"><a id="close-btn" href="#projects" class="popup__close">&times;</a><h3>${obj.getTitle().main}</h3><div class="popup__description "><h2>${obj.getTitle().sub}</h2><p class="paragraph">${obj.getDetails().desc}</p><h3>Technologies used:</h3><div class="popup__techs"><ul>${obj.generateList()}</ul></div></div><div class="popup__buttons"><a href="${obj.getLinks().live}" class="popup__right__btn" target="_blank">View code</a><a href="${obj.getLinks().code}" class="popup__right__btn" target="_blank">See live</a></div></div></div></div>`;
    
    
    
    
    const wrapper = document.createElement('div');
    wrapper.innerHTML= html;
    
    document.body.appendChild(wrapper);
    
    animate();
    
    
    function animate () {
        
        let opacity = 0;
       var animation = setInterval(function(){
               opacity += 0.1;
               wrapper.firstChild.style.opacity = opacity;
               console.log(opacity)
               if(opacity >= 1){
                   opacity = 1;
                   clearInterval(animation);
               }
               
           }, 70);
    
    }
    
    
    
    const closeBtn = document.body.appendChild(wrapper).querySelector('#close-btn');
    
    closeBtn.addEventListener('click', hidePopup);
    
    
    function hidePopup() {
        document.body.removeChild(wrapper);
    }
}
    
    

})();