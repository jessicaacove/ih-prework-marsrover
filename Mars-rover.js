bplist00�XUTI-Data�_$com.apple.traditional-mac-plain-text_public.utf8-plain-text_public.utf16-plain-textO!var myRover = {  position: [0,0],   direction: 'N'};function goForward(rover) {  switch(rover.direction) {    case 'N':      if (rover.position[1] < 10) {        rover.position[1]++      } else {        rover.position[1] = 0      }      break;    case 'E':      if (rover.position[0] < 10) {        rover.position[0]++      } else {        rover.position[0] = 0      }      break;    case 'S':      if (rover.position[1] > 0) {        rover.position[1]--      } else {        rover.position[1] = 10      }      break;    case 'W':      if (rover.position[0] > 0) {        rover.position[0]--      } else {        rover.position[0] = 10      }      break;  };}goForward(myRover);function goBackward(rover) {  switch(rover.direction) {    case 'N':      if (rover.position[1] > 0) {        rover.position[1]--      } else {        rover.position[1] = 10      }      break;    case 'E':      if (rover.position[0] > 0) {        rover.position[0]--      } else {        rover.position[0] = 10      }      break;    case 'S':      if (rover.position[1] < 10) {        rover.position[1]++      } else {        rover.position[1] = 0      }      break;    case 'W':      if (rover.position[0] < 10) {        rover.position[0]++      } else {        rover.position[0] = 0      }      break;  };}goBackward(myRover);var directionArray = ["N","E","S","W"];function turnRight(rover) {  switch(rover.direction) {    case 'N':      rover.direction = directionArray[1]      break;    case 'E':      rover.direction = directionArray[2]      break;    case 'S':      rover.direction = directionArray[3]      break;    case 'W':      rover.direction = directionArray[0]      break;  };}turnRight(myRover);function turnLeft(rover) {  switch(rover.direction) {    case 'N':      rover.direction = directionArray[3]      break;    case 'E':      rover.direction = directionArray[0]      break;    case 'S':      rover.direction = directionArray[1]      break;    case 'W':      rover.direction = directionArray[2]      break;  };}turnLeft(myRover); var string = "fffrfflfffbb";  for (i=0; i< string.length; i++) {    if (string[i] == "f") {      goForward(myRover)    } else if (string[i] == "b") {      goBackward(myRover)    } else if (string[i] == "r") {      turnRight(myRover)    } else if (string[i] == "l") {      turnLeft(myRover)    }  }function grid(rows, columns, defaultValue){  for(i=0; i<=rows; i++){    if (i== myRover.position[0]){      var array =  [(defaultValue.repeat(myRover.position[1])), ("X "), (defaultValue.repeat(columns-(myRover.position[1])))];      var str = array.join('');      console.log(str);    }    else {     console.log(defaultValue.repeat(columns + 1));    }  }}grid(10,10,"_ ");_!var myRover = {
  position: [0,0], 
  direction: 'N'
};


function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      if (rover.position[1] < 10) {
        rover.position[1]++
      } else {
        rover.position[1] = 0
      }
      break;
    case 'E':
      if (rover.position[0] < 10) {
        rover.position[0]++
      } else {
        rover.position[0] = 0
      }
      break;
    case 'S':
      if (rover.position[1] > 0) {
        rover.position[1]--
      } else {
        rover.position[1] = 10
      }
      break;
    case 'W':
      if (rover.position[0] > 0) {
        rover.position[0]--
      } else {
        rover.position[0] = 10
      }
      break;
  };
}

goForward(myRover);


function goBackward(rover) {
  switch(rover.direction) {
    case 'N':
      if (rover.position[1] > 0) {
        rover.position[1]--
      } else {
        rover.position[1] = 10
      }
      break;
    case 'E':
      if (rover.position[0] > 0) {
        rover.position[0]--
      } else {
        rover.position[0] = 10
      }
      break;
    case 'S':
      if (rover.position[1] < 10) {
        rover.position[1]++
      } else {
        rover.position[1] = 0
      }
      break;
    case 'W':
      if (rover.position[0] < 10) {
        rover.position[0]++
      } else {
        rover.position[0] = 0
      }
      break;
  };
}

goBackward(myRover);



var directionArray = ["N","E","S","W"];

function turnRight(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = directionArray[1]
      break;
    case 'E':
      rover.direction = directionArray[2]
      break;
    case 'S':
      rover.direction = directionArray[3]
      break;
    case 'W':
      rover.direction = directionArray[0]
      break;
  };
}

turnRight(myRover);



function turnLeft(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = directionArray[3]
      break;
    case 'E':
      rover.direction = directionArray[0]
      break;
    case 'S':
      rover.direction = directionArray[1]
      break;
    case 'W':
      rover.direction = directionArray[2]
      break;
  };
}

turnLeft(myRover);

 


var string = "fffrfflfffbb";
  for (i=0; i< string.length; i++) {
    if (string[i] == "f") {
      goForward(myRover)
    } else if (string[i] == "b") {
      goBackward(myRover)
    } else if (string[i] == "r") {
      turnRight(myRover)
    } else if (string[i] == "l") {
      turnLeft(myRover)
    }
  }




function grid(rows, columns, defaultValue){
  for(i=0; i<=rows; i++){
    if (i== myRover.position[0]){
      var array =  [(defaultValue.repeat(myRover.position[1])), ("X "), (defaultValue.repeat(columns-(myRover.position[1])))];
      var str = array.join('');
      console.log(str);
    }
    else {     console.log(defaultValue.repeat(columns + 1));
    }
  }
}
grid(10,10,"_ ");OBv a r   m y R o v e r   =   {      p o s i t i o n :   [ 0 , 0 ] ,        d i r e c t i o n :   ' N '  } ;    f u n c t i o n   g o F o r w a r d ( r o v e r )   {      s w i t c h ( r o v e r . d i r e c t i o n )   {          c a s e   ' N ' :              i f   ( r o v e r . p o s i t i o n [ 1 ]   <   1 0 )   {                  r o v e r . p o s i t i o n [ 1 ] + +              }   e l s e   {                  r o v e r . p o s i t i o n [ 1 ]   =   0              }              b r e a k ;          c a s e   ' E ' :              i f   ( r o v e r . p o s i t i o n [ 0 ]   <   1 0 )   {                  r o v e r . p o s i t i o n [ 0 ] + +              }   e l s e   {                  r o v e r . p o s i t i o n [ 0 ]   =   0              }              b r e a k ;          c a s e   ' S ' :              i f   ( r o v e r . p o s i t i o n [ 1 ]   >   0 )   {                  r o v e r . p o s i t i o n [ 1 ] - -              }   e l s e   {                  r o v e r . p o s i t i o n [ 1 ]   =   1 0              }              b r e a k ;          c a s e   ' W ' :              i f   ( r o v e r . p o s i t i o n [ 0 ]   >   0 )   {                  r o v e r . p o s i t i o n [ 0 ] - -              }   e l s e   {                  r o v e r . p o s i t i o n [ 0 ]   =   1 0              }              b r e a k ;      } ;  }   g o F o r w a r d ( m y R o v e r ) ;    f u n c t i o n   g o B a c k w a r d ( r o v e r )   {      s w i t c h ( r o v e r . d i r e c t i o n )   {          c a s e   ' N ' :              i f   ( r o v e r . p o s i t i o n [ 1 ]   >   0 )   {                  r o v e r . p o s i t i o n [ 1 ] - -              }   e l s e   {                  r o v e r . p o s i t i o n [ 1 ]   =   1 0              }              b r e a k ;          c a s e   ' E ' :              i f   ( r o v e r . p o s i t i o n [ 0 ]   >   0 )   {                  r o v e r . p o s i t i o n [ 0 ] - -              }   e l s e   {                  r o v e r . p o s i t i o n [ 0 ]   =   1 0              }              b r e a k ;          c a s e   ' S ' :              i f   ( r o v e r . p o s i t i o n [ 1 ]   <   1 0 )   {                  r o v e r . p o s i t i o n [ 1 ] + +              }   e l s e   {                  r o v e r . p o s i t i o n [ 1 ]   =   0              }              b r e a k ;          c a s e   ' W ' :              i f   ( r o v e r . p o s i t i o n [ 0 ]   <   1 0 )   {                  r o v e r . p o s i t i o n [ 0 ] + +              }   e l s e   {                  r o v e r . p o s i t i o n [ 0 ]   =   0              }              b r e a k ;      } ;  }   g o B a c k w a r d ( m y R o v e r ) ;     v a r   d i r e c t i o n A r r a y   =   [ " N " , " E " , " S " , " W " ] ;   f u n c t i o n   t u r n R i g h t ( r o v e r )   {      s w i t c h ( r o v e r . d i r e c t i o n )   {          c a s e   ' N ' :              r o v e r . d i r e c t i o n   =   d i r e c t i o n A r r a y [ 1 ]              b r e a k ;          c a s e   ' E ' :              r o v e r . d i r e c t i o n   =   d i r e c t i o n A r r a y [ 2 ]              b r e a k ;          c a s e   ' S ' :              r o v e r . d i r e c t i o n   =   d i r e c t i o n A r r a y [ 3 ]              b r e a k ;          c a s e   ' W ' :              r o v e r . d i r e c t i o n   =   d i r e c t i o n A r r a y [ 0 ]              b r e a k ;      } ;  }   t u r n R i g h t ( m y R o v e r ) ;     f u n c t i o n   t u r n L e f t ( r o v e r )   {      s w i t c h ( r o v e r . d i r e c t i o n )   {          c a s e   ' N ' :              r o v e r . d i r e c t i o n   =   d i r e c t i o n A r r a y [ 3 ]              b r e a k ;          c a s e   ' E ' :              r o v e r . d i r e c t i o n   =   d i r e c t i o n A r r a y [ 0 ]              b r e a k ;          c a s e   ' S ' :              r o v e r . d i r e c t i o n   =   d i r e c t i o n A r r a y [ 1 ]              b r e a k ;          c a s e   ' W ' :              r o v e r . d i r e c t i o n   =   d i r e c t i o n A r r a y [ 2 ]              b r e a k ;      } ;  }   t u r n L e f t ( m y R o v e r ) ;        v a r   s t r i n g   =   " f f f r f f l f f f b b " ;      f o r   ( i = 0 ;   i <   s t r i n g . l e n g t h ;   i + + )   {          i f   ( s t r i n g [ i ]   = =   " f " )   {              g o F o r w a r d ( m y R o v e r )          }   e l s e   i f   ( s t r i n g [ i ]   = =   " b " )   {              g o B a c k w a r d ( m y R o v e r )          }   e l s e   i f   ( s t r i n g [ i ]   = =   " r " )   {              t u r n R i g h t ( m y R o v e r )          }   e l s e   i f   ( s t r i n g [ i ]   = =   " l " )   {              t u r n L e f t ( m y R o v e r )          }      }      f u n c t i o n   g r i d ( r o w s ,   c o l u m n s ,   d e f a u l t V a l u e ) {      f o r ( i = 0 ;   i < = r o w s ;   i + + ) {          i f   ( i = =   m y R o v e r . p o s i t i o n [ 0 ] ) {              v a r   a r r a y   =     [ ( d e f a u l t V a l u e . r e p e a t ( m y R o v e r . p o s i t i o n [ 1 ] ) ) ,   ( " X   " ) ,   ( d e f a u l t V a l u e . r e p e a t ( c o l u m n s - ( m y R o v e r . p o s i t i o n [ 1 ] ) ) ) ] ;              v a r   s t r   =   a r r a y . j o i n ( ' ' ) ;              c o n s o l e . l o g ( s t r ) ;          }          e l s e   {           c o n s o l e . l o g ( d e f a u l t V a l u e . r e p e a t ( c o l u m n s   +   1 ) ) ;          }      }  }  g r i d ( 1 0 , 1 0 , " _   " ) ;      B [ u��             	              -