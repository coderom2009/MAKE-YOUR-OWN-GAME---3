class SPGame{
    constructor(){
        this.score= 0
        this.name = null
        this.positionX = 0
        this.positionY = 0
        this.index = 0;
    }

    startSP(){
        playerSP = new Player();
        //scoreSP = playerSP.getScore();
        playerCharSP = createSprite(windowWidth/2,windowHeight-windowHeight/4-75,75,75)
        playerCharSP.addImage(playerCharSP_IMG)
        playerCharSP.scale = 0.35
        //obsGroup1 = new Group();
        //this.addSprites(obsGroup1,15,obsAlien1_img,0.5)
        //obsGroup2 = new Group();
        //this.addSprites(obsGroup2,10,obsAlien2_img,0.7)
        //coinGroup = new Group();
        //this.addSprites(coinGroup,25,coinImg,0.9)
        //icyGroup = new Group();
        //this.addSprites(icyGroup,6,icyImg,0.8)
        platformGroup = new Group();
        //this.addSprites(platformGroup,60,platformImg,0.6) //pos

        //platform creation//
        
        
    }

    addSprites(spriteGroup, numberOfSprites, spriteImage, scale, positions = []) {
        for (var i = 0; i < numberOfSprites; i++){
          var x, y;
    
          //C41 //SA
          if (positions.length > 0) {
            x = positions[i].x;
            y = positions[i].y;
            spriteImage = positions[i].image;
          } else {
            x = random(width / 2 + 150, width / 2 - 150);
            y = random(-height * 4.5, height - 400);
          }
          var sprite = createSprite(x, y);
          sprite.addImage("sprite", spriteImage);
    
          sprite.scale = scale;
          spriteGroup.add(sprite);
        }
    }

    addPlatforms(arr,spriteG,so,rand,tCanGo){
      
      
      var canExe = true

      if(arr[0].l_tn>6){
        tCanGo = false
      }
      
      if(frameCount%15 == 0&&canExe==true&&tCanGo==true){
        //var rand = Math.round(random(1,4))
        
        if(so == rand){
          console.log("same no...");
        }else{
          switch(rand){
            case 1:console.log("1"),so = 1;
            break;
    
            case 2:console.log("2"),so = 2;
            break;
    
            case 3:console.log("3"),so = 3;
            break;
    
            case 4:console.log("4"),so = 4;
            break;
    
            default: break;
          }
          so=rand
          s=so
          //console.log(platformsCreated,levelsCreated)
          //start
          
          //arr.splice(arr.length,0,{t:2});
          this.creating_multi(arr,so,canExe,spriteG);
          


        }
        
        
        //console.log(canExe)
      }
       
        //done : checking val and printing in consaoel
        //next: making var d_2,d_3,x,y. Splicing the array and making spro=ites
      
      
      

    }


    creating_multi(array,val,canGo,sG){

      var timesCanExe = true
      var var_1 ,var_2 ,var_3
      var x,y
      var highestY_tn = 0
      var w
      window.w =w;
      var base
      window.base = base
      var sampleVar = []
      window.sampleVar = sampleVar; //here sample var  <=


      if(array[0].l_tn==0){
        highestY_tn = windowHeight-windowHeight/4-195
        //console.log(highestY_tn)
      }else if(array[0].l_tn!=0){
        highestY_tn = (windowHeight-windowHeight/4-195)-(array[0].l_tn*250)
      }

      if(array[0].l_tn==0){
        base = createSprite(windowWidth/2,windowHeight-windowHeight/4+55,windowWidth*1/1.5,30)
        platformGroup.add(base)
        base.debug = true
        base.setCollider("rectangle",0,0,base.width,base.height)
      }


      if(val == 1&&timesCanExe==true){ //creation of 3 blocks


        console.log("3 block")
        array.splice(array.length,0,{level: array[0].l_tn+1,type: 1,s1:null,s2:null,s3:null})
        array[0].l_tn +=1

        for(var i=1; i<4 ; i++){
          console.log(i)

          if(i==1){

            x=windowWidth/2-380
            y=highestY_tn;                                       //done

            array[array.length-1].s1 = "platform_L"+ array[0].l_tn +"_P"+i
            array[array.length-1].s1 = createSprite(x,y,215,27) //w changing to array s1/s2/s3
            array[array.length-1].s1.debug = true
            array[array.length-1].s1.setCollider("rectangle",0,0,215,27)
            platformGroup.add(array[array.length-1].s1)
            console.log(x,y)
            
          }else if(i==2){

            x=windowWidth/2
            y=highestY_tn;

            array[array.length-1].s2 = "platform_L"+ array[0].l_tn +"_P"+i
            array[array.length-1].s2 = createSprite(x,y,215,27) //w changing to array s1/s2/s3
            array[array.length-1].s2.debug = true
            array[array.length-1].s2.setCollider("rectangle",0,0,215,27)
            platformGroup.add(array[array.length-1].s2)
            console.log(x,y)

          }else if(i==3){

            x=windowWidth/2+380
            y=highestY_tn;

            array[array.length-1].s3 = "platform_L"+ array[0].l_tn +"_P"+i
            array[array.length-1].s3 = createSprite(x,y,215,27) //w changing to array s1/s2/s3
            array[array.length-1].s3.debug = true
            array[array.length-1].s3.setCollider("rectangle",0,0,215,27)
            platformGroup.add(array[array.length-1].s3)
            console.log(x,y)
          }
        }

        
        array[0].p_tn +=3
        

      }else if((val == 2||val == 3||val == 4)&&timesCanExe==true){//creation of 2 blocks


        console.log("2 block")
        array.splice(array.length,0,{level: array[0].l_tn+1,type: val,s1:null,s2:null})
        array[0].l_tn +=1


        for(var i=1; i<3 ; i++){

          console.log(i)

          if(i==1){

            if(val == 2){
              x=windowWidth/2-190
              y=highestY_tn;
              array[array.length-1].s1 = "platform_L"+ array[0].l_tn +"_P"+i
              array[array.length-1].s1 = createSprite(x,y,215,27)
              array[array.length-1].s1.debug = true
              array[array.length-1].s1.setCollider("rectangle",0,0,215,27)
              platformGroup.add(array[array.length-1].s1)
              console.log(x,y)
            }else if( val == 3){
              x=windowWidth/2-380
              y=highestY_tn;
              array[array.length-1].s1 = "platform_L"+ array[0].l_tn +"_P"+i
              array[array.length-1].s1 = createSprite(x,y,215,27)
              array[array.length-1].s1.debug = true
              array[array.length-1].s1.setCollider("rectangle",0,0,215,27)
              platformGroup.add(array[array.length-1].s1)
              console.log(x,y)
            }else if(val == 4){
              x=windowWidth/2
              y=highestY_tn;
              array[array.length-1].s1 = "platform_L"+ array[0].l_tn +"_P"+i
              array[array.length-1].s1 = createSprite(x,y,215,27)
              array[array.length-1].s1.debug = true
              array[array.length-1].s1.setCollider("rectangle",0,0,215,27)
              platformGroup.add(array[array.length-1].s1)
              console.log(x,y)
            }
            
          }else if(i==2){

            if(val == 2){
              x=windowWidth/2+190
              y=highestY_tn;
              array[array.length-1].s2 = "platform_L"+ array[0].l_tn +"_P"+i
              array[array.length-1].s2 = createSprite(x,y,215,27)
              array[array.length-1].s2.debug = true
              array[array.length-1].s2.setCollider("rectangle",0,0,215,27)
              platformGroup.add(array[array.length-1].s2)
              console.log(x,y)
              //array.splice(array.length,0,{level: array[0].l_tn+1,type: 2})
            }else if( val == 3){
              x=windowWidth/2
              y=highestY_tn;
              array[array.length-1].s2 = "platform_L"+ array[0].l_tn +"_P"+i
              array[array.length-1].s2 = createSprite(x,y,215,27)
              array[array.length-1].s2.debug = true
              array[array.length-1].s2.setCollider("rectangle",0,0,215,27)
              platformGroup.add(array[array.length-1].s2)
              console.log(x,y)
              //array.splice(array.length,0,{level: array[0].l_tn+1,type: 3})
            }else if(val == 4){
              x=windowWidth/2+380
              y=highestY_tn;
              array[array.length-1].s2 = "platform_L"+ array[0].l_tn +"_P"+i
              array[array.length-1].s2 = createSprite(x,y,215,27)
              array[array.length-1].s2.debug = true
              array[array.length-1].s2.setCollider("rectangle",0,0,215,27)
              platformGroup.add(array[array.length-1].s2)
              console.log(x,y)
              //array.splice(array.length,0,{level: array[0].l_tn+1,type: 4})
            }
            
          }
        }
        
        array[0].p_tn +=2
        

      }else{
        console.log("Error occured !!!")
      }
    }

    //dev log: done colliding,collider,adding in group etc etc...


  
}