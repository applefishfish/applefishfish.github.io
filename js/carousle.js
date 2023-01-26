/*
* banner carousle
* 
*/
(function(){
  
    var carousel_lsit = document.getElementById('carousel_lsit');
    var left_btn = document.getElementById('left_btn');
    var right_btn = document.getElementById('right_btn');
    var circle_ol = document.getElementById('circle_ol');
   
     var circle_lis = circle_ol.getElementsByTagName('li');

    
     var idx = 0;
     //right button
     right_btn.onclick = function () {
       
        idx++;
       
         if (idx > 2) {  
            idx = 0;
         }
          
            carousel_lsit.style.transform = 'translateX(' + -33.333333 * idx + '%)';

            setCircles();
        };
      
      

//left button
left_btn.onclick = function(){
    idx--;
    if (idx < 0) {
        idx = 2
    }
    carousel_lsit.style.transform = 'translateX(' + -33.333 * idx + '%)';
    setCircles();
       }
       function setCircles () {
        // for (var i = 0; i < = 4; i++) {
        // for (var i = 0; i <= 4; i++) {
        for (var i = 0; i <= 2; i++) {
            if (i == idx) {
           
                circle_lis[i].className = 'current';
            } else {
             
                circle_lis[i].className = '';
            }
 



        }

    }
    //blue dot
    circle_ol.onclick = function (e) {
        if (e.target.tagName.toLowerCase() == 'li') {
            var n = Number(e.target.getAttribute('data-n'));
            idx = n;
            carousel_lsit.style.transform = 'translateX(' + -33.3333 * idx + '%)';
            setCircles();
        }
    }

    // banner carousle
    var banner = document.getElementById("banner")
    var timer = setInterval(function () {
       
        right_btn.onclick()
    }, 2000)

    banner.onmouseover = function () {
        clearInterval(timer)
    }
  
    banner.onmouseleave = function () {
        timer = setInterval(function () {
          
            right_btn.onclick()
        }, 2000)
    }

})();

/*
* product carousle
*/
(function () {
    
    var product_carousel_lsit = document.getElementById('product_carousel_lsit');

    var left_btn = document.getElementById('left_btn1');
    var right_btn = document.getElementById('right_btn1');

    //不
    var idx = 0;

   
    right_btn.onclick = function () {
      
        idx++;

     
        if (idx > 3) {
            idx = 3
        }

      
        product_carousel_lsit.style.transform = 'translateX(' + -231 * idx + 'px)';  

    };

    //左按钮事件监听
    left_btn.onclick = function () {
        idx--
        if (idx <0) {
            idx = 0
        }
        product_carousel_lsit.style.transform = 'translateX(' + -231 * idx + 'px)';  
    }

})();


/*
* recommend carousle
*/
(function () {

    var recommend_carousel_lsit = document.getElementById('recommend_carousel_lsit');
    var left_btn = document.getElementById('left_btn2');
    var right_btn = document.getElementById('right_btn2');
 
   
    var idx = 0;

  
    right_btn.onclick = function () {
       
        idx++;

      
        if (idx > 3) {
            idx = 3
        }

      
        recommend_carousel_lsit.style.transform = 'translateX(' + -385 * idx + 'px)';  

    };


 
    left_btn.onclick = function () {
        idx--
        if (idx <0) {
            idx = 0
        }
        recommend_carousel_lsit.style.transform = 'translateX(' + -385 * idx + 'px)';

    }

})();
