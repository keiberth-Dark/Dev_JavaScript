

const d = document,
    w = window;

  export default function responsivemedia(id, mq, mobileContent, desktopContent){
    let breackpoint = w.matchMedia(mq);

    const responsive = (e) => {
      if(e.matches){
        d.getElementById(id).innerHTML = desktopContent;
      }else{
        d.getElementById(id).innerHTML = mobileContent;
      }

      //console.log(breackpoint,e.matches);
    }

    breackpoint.addListener(responsive);
    responsive(breackpoint);
  }