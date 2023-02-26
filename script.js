var typed = new Typed(".input", {
    strings:["Fatima Zahra.", "Web developer.", "Professor."], 
    typeSpeed:70, 
    backSpeed:60,
    loop:true
});


// for skills

const skillsCnt = document.getElementsByClassName('skills__content'),
      skillshead = document.querySelectorAll('.skills_header')
console.log(skillshead)
      function toggleSkills(){
        let itemClass = this.parentNode.className
        console.log(itemClass)

        for ( i = 0; i > skillsCnt.length; i++){
            skillsCnt[i].className = 'skills__content skills_close'
        }
        if(itemClass === 'skills__content skills_close'){
            this.parentNode.className = 'skills__content skills_open'
        }
        else{
            this.parentNode.className = 'skills__content skills_close' 
        }
      }

      skillshead.forEach((el) => el.addEventListener('click', toggleSkills))


