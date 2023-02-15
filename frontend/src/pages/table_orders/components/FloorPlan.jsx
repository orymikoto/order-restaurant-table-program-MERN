import React, {  useRef } from 'react'

function FloorPlan({className, order_data=[]}) {
  const classname_table = 'fill-neutral-500 stroke-neutral-500 cursor-pointer hover:fill-teal-600 hover:stroke-teal-600 duration-300 ease-in-out'

  const ref = useRef([])

  // const tes = ref.current[1]
  // tes.className.baseVal = 'fill-amber-500 stroke-amber-500'
  ref.current?.map((item) => {
    if(order_data.includes(item?.id)){
      return item ? item.className.baseVal = 'fill-red-500 stroke-red-500': null
    }else{
      return item? item.className.baseVal = classname_table: null
      
    }
  })


  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1200"
      height="800"
      fill="none"
      viewBox="0 0 1200 800"
      className={className}
    >
      <path fill="#fff" d="M0 0H1200V800H0z"></path>
      
      {/* ID 1 */}
      <g ref={(e) => ref.current.push(e)} id='mt_mr_1' className={classname_table}>
        <rect
          width="61.766"
          height="63.56"
          rx="21"
          transform="rotate(-89.999 569.797 -430.027)"
        ></rect>
        <path
        stroke="#7A7A7A"
        strokeLinecap="round"
        d="M0.5 -0.5L27.252 -0.5"
        transform="translate(1017.72 74.533)"
      ></path>
      <path
        stroke="#7A7A7A"
        strokeLinecap="round"
        d="M0.5 -0.5L27.252 -0.5"
        transform="translate(1017.72 144.128)"
      ></path>
      <path
        stroke="#7A7A7A"
        strokeLinecap="round"
        d="M0.5 -0.5L26.468 -0.5"
        transform="rotate(90.001 485.775 581.176)"
      ></path>
      <path
        stroke="#7A7A7A"
        strokeLinecap="round"
        d="M0.5 -0.5L26.468 -0.5"
        transform="rotate(90.001 449.964 545.365)"
      ></path>
      </g>

      {/* ID 2 */}
      <g ref={(e) => ref.current.push(e)} id='mt_mr_2' className={classname_table}>
        <rect
          width="61.766"
          height="63.56"
          rx="21"
          transform="rotate(-89.999 512.054 -372.285)"
        ></rect>
        <path
          strokeLinecap="round"
          d="M0.5 -0.5L27.252 -0.5"
          transform="translate(902.236 74.531)"
        ></path>
        <path
          strokeLinecap="round"
          d="M0.5 -0.5L27.252 -0.5"
          transform="translate(902.235 144.126)"
        ></path>
        <path
          strokeLinecap="round"
          d="M0.5 -0.5L26.468 -0.5"
          transform="rotate(90.001 428.032 523.432)"
        ></path>
        <path
          strokeLinecap="round"
          d="M0.5 -0.5L26.468 -0.5"
          transform="rotate(90.001 392.224 487.624)"
        ></path>
      </g>

      {/* ID 3 */}
      <g ref={(e) => ref.current.push(e)} id='mt_mr_3' className={classname_table}>
        <path
          strokeLinecap="round"
          d="M0.5 -0.5L27.252 -0.5"
          transform="translate(786.753 73.66)"
        ></path>
        <path
          strokeLinecap="round"
          d="M0.5 -0.5L27.252 -0.5"
          transform="translate(786.752 143.254)"
        ></path>
        <path
          strokeLinecap="round"
          d="M0.5 -0.5L26.468 -0.5"
          transform="rotate(90.001 370.727 465.257)"
        ></path>
        <path
          strokeLinecap="round"
          d="M0.5 -0.5L26.468 -0.5"
          transform="rotate(90.001 334.918 429.448)"
        ></path>
        <rect
          width="61.766"
          height="63.56"
          rx="21"
          transform="rotate(-89.999 453.877 -314.98)"
        ></rect>
      </g>

      {/* ID 4 */}
      <g ref={(e) => ref.current.push(e)} id='mt_mr_4' className={classname_table}>
        <rect
          width="61.766"
          height="63.56"
          rx="21"
          transform="rotate(-89.999 397.04 -256.927)"
        ></rect>
        <path
          strokeLinecap="round"
          d="M0.5 -0.5L27.252 -0.5"
          transform="translate(671.865 74.872)"
        ></path>
        <path
          strokeLinecap="round"
          d="M0.5 -0.5L27.252 -0.5"
          transform="translate(671.863 144.467)"
        ></path>
        <path
          strokeLinecap="round"
          d="M0.5 -0.5L26.468 -0.5"
          transform="rotate(90.001 312.676 408.42)"
        ></path>
        <path
          strokeLinecap="round"
          d="M0.5 -0.5L26.468 -0.5"
          transform="rotate(90.001 276.868 372.611)"
        ></path>
      </g>

      {/* ID 5 */}
      <g ref={(e) => ref.current.push(e)} id='mt_mr_5' className={classname_table}>
        <rect
          width="61.766"
          height="63.56"
          rx="21"
          transform="rotate(-89.999 338.862 -199.62)"
        ></rect>
        <path
          strokeLinecap="round"
          d="M0.5 -0.5L27.252 -0.5"
          transform="translate(556.382 74)"
        ></path>
        <path
          strokeLinecap="round"
          d="M0.5 -0.5L27.252 -0.5"
          transform="translate(556.38 143.595)"
        ></path>
        <path
          strokeLinecap="round"
          d="M0.5 -0.5L26.468 -0.5"
          transform="rotate(90.001 255.37 350.243)"
        ></path>
        <path
          strokeLinecap="round"
          d="M0.5 -0.5L26.468 -0.5"
          transform="rotate(90.001 219.562 314.435)"
        ></path>
      </g>

      {/* MEETING ROOM */}
      <g ref={(e) => ref.current.push(e)} id='meet_1' className={classname_table}>
        <rect
          width="63.013"
          height="148.653"
          x="126.438"
          y="507.347"
          rx="15"
        ></rect>
        <path
          strokeLinecap="round"
          d="M193.5 520.886L193.5 538.142"
        ></path>
        <path
          strokeLinecap="round"
          d="M122.5 520.886L122.5 538.142"
        ></path>
        <path
          strokeLinecap="round"
          d="M167.65 503.5L150.013 503.5"
        ></path>
        <path
          strokeLinecap="round"
          d="M193.5 546.966L193.5 564.222"
        ></path>
        <path
          strokeLinecap="round"
          d="M122.5 546.966L122.5 564.222"
        ></path>
        <path
          strokeLinecap="round"
          d="M193.5 573.045L193.5 590.301"
        ></path>
        <path
          strokeLinecap="round"
          d="M122.5 573.045L122.5 590.301"
        ></path>
        <path
          strokeLinecap="round"
          d="M193.5 599.125L193.5 616.381"
        ></path>
        <path
          strokeLinecap="round"
          d="M122.5 599.125L122.5 616.381"
        ></path>
        <path
          strokeLinecap="round"
          d="M193.5 625.205L193.5 642.46"
        ></path>
        <path
          strokeLinecap="round"
          d="M122.5 625.205L122.5 642.46"
        ></path>
      </g>

      {/* VIP 1 */}
      <g ref={(e) => ref.current.push(e)} id='vip_1' className={classname_table}>
        <rect
          width="138.922"
          height="63.718"
          x="292.59"
          y="592.527"
          rx="15"
          transform="rotate(-90 292.59 592.527)"
        ></rect>
        <path
          strokeLinecap="round"
          d="M311.038 595.5L337.859 595.5"
        ></path>
        <path
          strokeLinecap="round"
          d="M311.038 450.5L337.859 450.5"
        ></path>
        <path
          strokeLinecap="round"
          d="M289.5 547.877L289.5 573.793"
        ></path>
        <path
          strokeLinecap="round"
          d="M289.5 508.805L289.5 534.722"
        ></path>
        <path
          strokeLinecap="round"
          d="M289.5 470.602L289.5 496.518"
        ></path>
        <path
          strokeLinecap="round"
          d="M359.5 547.877L359.5 573.793"
        ></path>
        <path
          strokeLinecap="round"
          d="M359.5 508.805L359.5 534.722"
        ></path>
        <path
          strokeLinecap="round"
          d="M359.5 470.602L359.5 496.518"
        ></path>
      </g>

      {/* VIP 2 */}
      <g ref={(e) => ref.current.push(e)} id='vip_2' className={classname_table}>
        <rect
          width="143.713"
          height="61.897"
          x="288.593"
          y="645.487"
          rx="15"
        ></rect>
        <path
          strokeLinecap="round"
          d="M285.5 663.423L285.5 689.449"
        ></path>
        <path
          strokeLinecap="round"
          d="M435.5 663.423L435.5 689.449"
        ></path>
        <path
          strokeLinecap="round"
          d="M334.799 642.5L307.955 642.5"
        ></path>
        <path
          strokeLinecap="round"
          d="M375.219 642.5L348.374 642.5"
        ></path>
        <path
          strokeLinecap="round"
          d="M414.74 642.5L387.895 642.5"
        ></path>
        <path
          strokeLinecap="round"
          d="M334.799 710.5L307.955 710.5"
        ></path>
        <path
          strokeLinecap="round"
          d="M375.219 710.5L348.374 710.5"
        ></path>
        <path
          strokeLinecap="round"
          d="M414.74 710.5L387.895 710.5"
        ></path>
      </g>

      {/* Out 1 */}
      <g ref={(e) => ref.current.push(e)} id='mt_od_1' className={classname_table}>
        <path
          d="M360.45 109.931c0 16.911-14.106 30.619-31.506 30.619-17.401 0-31.506-13.708-31.506-30.619 0-16.91 14.105-30.618 31.506-30.618 17.4 0 31.506 13.708 31.506 30.618z"
        ></path>
        <path
          strokeLinecap="round"
          d="M364.5 97.063L364.5 122.8"
        ></path>
        <path
          strokeLinecap="round"
          d="M293.5 97.063L293.5 122.8"
        ></path>
        <path
          strokeLinecap="round"
          d="M342.2 144.5L315.688 144.5"
        ></path>
        <path
          strokeLinecap="round"
          d="M342.2 75.5L315.688 75.5"
        ></path>
      </g>
      
      {/* Out 2 */}
      <g ref={(e) => ref.current.push(e)} id='mt_od_2' className={classname_table}>
        <path
          d="M240.45 131.931c0 16.911-14.106 30.619-31.506 30.619-17.401 0-31.506-13.708-31.506-30.619 0-16.91 14.105-30.619 31.506-30.619 17.4 0 31.506 13.709 31.506 30.619z"
        ></path>
        <path
          strokeLinecap="round"
          d="M244.5 119.062L244.5 144.8"
        ></path>
        <path
          strokeLinecap="round"
          d="M173.5 119.062L173.5 144.8"
        ></path>
        <path
          strokeLinecap="round"
          d="M222.2 166.5L195.688 166.5"
        ></path>
        <path
          strokeLinecap="round"
          d="M222.2 97.5L195.688 97.5"
        ></path>
      </g>

       {/* Out 3 */}
      <g ref={(e) => ref.current.push(e)} id='mt_od_3' className={classname_table}>
        <path
          d="M166.45 203.438c0 17.155-14.106 31.062-31.506 31.062-17.401 0-31.506-13.907-31.506-31.062 0-17.156 14.105-31.063 31.506-31.063 17.4 0 31.506 13.907 31.506 31.063z"
        ></path>
        <path
          strokeLinecap="round"
          d="M170.5 190.375L170.5 216.5"
        ></path>
        <path
          strokeLinecap="round"
          d="M99.5 190.375L99.5 216.5"
        ></path>
        <path
          strokeLinecap="round"
          d="M148.2 238.5L121.688 238.5"
        ></path>
        <path
          strokeLinecap="round"
          d="M148.2 168.5L121.688 168.5"
        ></path>
      </g>
      
      {/* Out 4 */}
      <g ref={(e) => ref.current.push(e)} id='mt_od_4' className={classname_table}>
        <path
          d="M144.45 328.931c0 16.911-14.106 30.619-31.506 30.619s-31.507-13.708-31.507-30.619c0-16.91 14.106-30.619 31.507-30.619 17.4 0 31.506 13.709 31.506 30.619z"
        ></path>
        <path
          strokeLinecap="round"
          d="M148.5 316.062L148.5 341.8"
        ></path>
        <path
          strokeLinecap="round"
          d="M77.5 316.062L77.5 341.8"
        ></path>
        <path
          strokeLinecap="round"
          d="M126.2 363.5L99.688 363.5"
        ></path>
        <path
          strokeLinecap="round"
          d="M126.2 294.5L99.688 294.5"
        ></path>
      </g>

      {/* Big Main 5 */}
      <g ref={(e) => ref.current.push(e)} id='bt_mr_5' className={classname_table}>
        <rect
          width="104.93"
          height="63.718"
          x="536.59"
          y="313.531"
          rx="15"
          transform="rotate(-90 536.59 313.531)"
        ></rect>
        <path
          strokeLinecap="round"
          d="M555.038 316.5L581.859 316.5"
        ></path>
        <path
          strokeLinecap="round"
          d="M555.038 205.5L581.859 205.5"
        ></path>
        <path
          strokeLinecap="round"
          d="M603.5 267.203L603.5 293.086"
        ></path>
        <path
          strokeLinecap="round"
          d="M533.5 267.203L533.5 293.086"
        ></path>
        <path
          strokeLinecap="round"
          d="M603.5 228.18L603.5 254.062"
        ></path>
        <path
          strokeLinecap="round"
          d="M533.5 228.18L533.5 254.062"
        ></path>
      </g>

      {/* Big Main 3 */}
      <g ref={(e) => ref.current.push(e)} id='bt_mr_3' className={classname_table}>
        <rect
          width="104.93"
          height="63.718"
          x="767.59"
          y="312.531"
          rx="15"
          transform="rotate(-90 767.59 312.531)"
        ></rect>
        <path
          strokeLinecap="round"
          d="M786.038 315.5L812.859 315.5"
        ></path>
        <path
          strokeLinecap="round"
          d="M786.038 204.5L812.859 204.5"
        ></path>
        <path
          strokeLinecap="round"
          d="M834.5 266.203L834.5 292.086"
        ></path>
        <path
          strokeLinecap="round"
          d="M764.5 266.203L764.5 292.086"
        ></path>
        <path
          strokeLinecap="round"
          d="M834.5 227.18L834.5 253.062"
        ></path>
        <path
          strokeLinecap="round"
          d="M764.5 227.18L764.5 253.062"
        ></path>
      </g>

      {/* Big Main 4 */}
      <g ref={(e) => ref.current.push(e)} id='bt_mr_4' className={classname_table}>
        <rect
          width="104.93"
          height="63.718"
          x="652.59"
          y="313.531"
          rx="15"
          transform="rotate(-90 652.59 313.531)"
        ></rect>
        <path
          strokeLinecap="round"
          d="M671.038 316.5L697.859 316.5"
        ></path>
        <path
          strokeLinecap="round"
          d="M671.038 205.5L697.859 205.5"
        ></path>
        <path
          strokeLinecap="round"
          d="M719.5 267.203L719.5 293.086"
        ></path>
        <path
          strokeLinecap="round"
          d="M649.5 267.203L649.5 293.086"
        ></path>
        <path
          strokeLinecap="round"
          d="M719.5 228.18L719.5 254.062"
        ></path>
        <path
          strokeLinecap="round"
          d="M649.5 228.18L649.5 254.062"
        ></path>
      </g>

      {/* Big Main 2 */}
      <g ref={(e) => ref.current.push(e)} id='bt_mr_2' className={classname_table}>
        <rect
          width="104.93"
          height="63.718"
          x="883.59"
          y="312.531"
          rx="15"
          transform="rotate(-90 883.59 312.531)"
        ></rect>
        <path
          strokeLinecap="round"
          d="M902.038 315.5L928.859 315.5"
        ></path>
        <path
          strokeLinecap="round"
          d="M902.038 204.5L928.859 204.5"
        ></path>
        <path
          strokeLinecap="round"
          d="M950.5 266.203L950.5 292.086"
        ></path>
        <path
          strokeLinecap="round"
          d="M880.5 266.203L880.5 292.086"
        ></path>
        <path
          strokeLinecap="round"
          d="M950.5 227.18L950.5 253.062"
        ></path>
        <path
          strokeLinecap="round"
          d="M880.5 227.18L880.5 253.062"
        ></path>
      </g>

      {/* Big Main 1 */}
      <g ref={(e) => ref.current.push(e)} id='bt_mr_1' className={classname_table}>
        <rect
          width="104.93"
          height="63.718"
          x="998.59"
          y="313.531"
          rx="15"
          transform="rotate(-90 998.59 313.531)"
        ></rect>
        <path
          strokeLinecap="round"
          d="M1017.04 316.5L1043.86 316.5"
        ></path>
        <path
          strokeLinecap="round"
          d="M1017.04 205.5L1043.86 205.5"
        ></path>
        <path
          strokeLinecap="round"
          d="M1065.5 267.203L1065.5 293.086"
        ></path>
        <path
          strokeLinecap="round"
          d="M995.5 267.203L995.5 293.086"
        ></path>
        <path
          strokeLinecap="round"
          d="M1065.5 228.18L1065.5 254.062"
        ></path>
        <path
          strokeLinecap="round"
          d="M995.5 228.18L995.5 254.062"
        ></path>
      </g>

      {/* small main 9 */}
      <g ref={(e) => ref.current.push(e)} id='st_mr_9' className={classname_table}>
        <ellipse cx="572" cy="393" rx="13.333" ry="13"></ellipse>
        <path d="M588 383.467v18.2M556 383.467v18.2"></path>
      </g>

      {/* small main 8 */}
      <g ref={(e) => ref.current.push(e)} id='st_mr_8' className={classname_table}>
        <ellipse cx="629" cy="393" rx="13.333" ry="13"></ellipse>
        <path d="M645 383.467v18.2M613 383.467v18.2"></path>
      </g>

      {/* small main 7 */}
      <g ref={(e) => ref.current.push(e)} id='st_mr_7' className={classname_table}>
        <ellipse cx="686.5" cy="393" rx="13.75" ry="13"></ellipse>
        <path d="M703 383.467v18.2M670 383.467v18.2"></path>
      </g>

      {/* small main 6 */}
      <g ref={(e) => ref.current.push(e)} id='st_mr_6' className={classname_table}>
        <ellipse cx="744" cy="393" rx="13.333" ry="13"></ellipse>
        <path d="M760 383.467v18.2M728 383.467v18.2"></path>
      </g>

      {/* small main 5 */}
      <g ref={(e) => ref.current.push(e)} id='st_mr_5' className={classname_table}>
        <ellipse cx="801" cy="393" rx="13.333" ry="13"></ellipse>
        <path d="M817 383.467v18.2M785 383.467v18.2"></path>
      </g>
      {/* small main 4 */}
      <g ref={(e) => ref.current.push(e)} id='st_mr_4' className={classname_table}>
        <ellipse cx="858" cy="393" rx="13.333" ry="13"></ellipse>
        <path d="M874 383.467v18.2M842 383.467v18.2"></path>
      </g>
      {/* small main 3 */}
      <g ref={(e) => ref.current.push(e)} id='st_mr_3' className={classname_table}>
        <ellipse cx="916" cy="393" rx="13.333" ry="13"></ellipse>
        <path d="M932 383.467v18.2M900 383.467v18.2"></path>
      </g>
      {/* small main 2 */}
      <g ref={(e) => ref.current.push(e)} id='st_mr_2' className={classname_table}>
        <ellipse cx="973" cy="393" rx="13.333" ry="13"></ellipse>
        <path d="M989 383.467v18.2M957 383.467v18.2"></path>
      </g>
      {/* small main 1 */}
      <g ref={(e) => ref.current.push(e)} id='st_mr_1' className={classname_table}>
        <ellipse cx="1030" cy="393" rx="13.333" ry="13"></ellipse>
        <path d="M1046 383.467v18.2M1014 383.467v18.2"></path>
      </g>
      

      {/* Outline  */}
      <g>
        
        <path stroke="#7A7A7A" strokeWidth="7" d="M635 524.5L1144 524.5"></path>
        <path stroke="#7A7A7A" strokeWidth="7" d="M55 750.5L1144 750.5"></path>
        <path
          stroke="#7A7A7A"
          strokeWidth="7"
          d="M254.5 705.994L255 400.993"
        ></path>
        <path stroke="#7A7A7A" strokeWidth="7" d="M58.5 748L58.5 400"></path>
        <path stroke="#7A7A7A" strokeWidth="7" d="M372.5 332L372.5 47"></path>
        <path stroke="#7A7A7A" strokeWidth="7" d="M58.5 400L58.5 163"></path>
        <path stroke="#7A7A7A" strokeWidth="7" d="M1140.5 409L1140.5 52"></path>
        <path stroke="#7A7A7A" strokeWidth="7" d="M1140.5 754L1140.5 484"></path>
        <path
          stroke="#7A7A7A"
          strokeWidth="7"
          d="M497.5 753.985L498.5 527.984"
        ></path>
        <path
          stroke="#7A7A7A"
          strokeWidth="7"
          d="M369.489 400.539L403.799 435.243"
        ></path>
        <path
          stroke="#7A7A7A"
          strokeWidth="7"
          d="M459.425 486.574L497.426 524.574"
        ></path>
        <path stroke="#7A7A7A" strokeWidth="7" d="M495 524.5L584 524.5"></path>
        <path
          stroke="#7A7A7A"
          strokeWidth="7"
          d="M57.515 165.515L175.515 47.515"
        ></path>
        <path stroke="#7A7A7A" strokeWidth="7" d="M173 48.5L1144 48.5"></path>
        <path
        fill="#D9D9D9"
        d="M510 351.5c0-5.799 4.701-10.5 10.5-10.5H1137v21H520.5c-5.799 0-10.5-4.701-10.5-10.5z"
      ></path>
      


      <path stroke="#7A7A7A" strokeWidth="7" d="M722.5 528L722.5 754"></path>
      <path
        stroke="#7A7A7A"
        strokeWidth="4"
        d="M940.5 526.5l5.218 11.564a50 50 0 0045.575 29.436H1138.5"
      ></path>
      <path
        stroke="#7A7A7A"
        strokeLinecap="round"
        strokeWidth="4"
        d="M637 528L637 571"
      ></path>
      <path
        stroke="#7A7A7A"
        strokeDasharray="7 7"
        strokeWidth="2"
        d="M638 571.5h-9.5c-25.129 0-45.5-20.371-45.5-45.5v0"
      ></path>
      <path
        stroke="#7A7A7A"
        strokeDasharray="7 7"
        strokeWidth="2"
        d="M638 571.5h-9.5c-25.129 0-45.5-20.371-45.5-45.5v0"
      ></path>
      <path
        stroke="#7A7A7A"
        strokeLinecap="round"
        strokeWidth="4"
        d="M1137 486L1094 486"
      ></path>
      <path
        stroke="#7A7A7A"
        strokeLinecap="round"
        strokeWidth="4"
        d="M1137 486L1094 486"
      ></path>
      <path
        stroke="#7A7A7A"
        strokeLinecap="round"
        strokeWidth="4"
        d="M1137 486L1094 486"
      ></path>
      <path
        stroke="#7A7A7A"
        strokeLinecap="round"
        strokeWidth="4"
        d="M1137.01 407L1093.99 407"
      ></path>
      <path
        stroke="#7A7A7A"
        strokeLinecap="round"
        strokeWidth="4"
        d="M1137.01 407L1093.99 407"
      ></path>
      <path
        stroke="#7A7A7A"
        strokeLinecap="round"
        strokeWidth="4"
        d="M1137.01 407L1093.99 407"
      ></path>
      <path
        stroke="#7A7A7A"
        strokeDasharray="7 7"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1094 406.491v5.742c0 19.33 15.67 35 35 35v0"
      ></path>
      <path
        stroke="#7A7A7A"
        strokeDasharray="7 7"
        strokeWidth="2"
        d="M1129 447.233v0c-19.33 0-35 15.67-35 35V484"
      ></path>
      <path
        stroke="#7A7A7A"
        strokeLinecap="round"
        strokeWidth="4"
        d="M459.482 489.212L428.144 520.549"
      ></path>
      <path
        stroke="#7A7A7A"
        strokeLinecap="round"
        strokeWidth="4"
        d="M459.482 489.212L428.144 520.549"
      ></path>
      <path
        stroke="#7A7A7A"
        strokeLinecap="round"
        strokeWidth="4"
        d="M459.482 489.212L428.144 520.549"
      ></path>
      <path
        stroke="#7A7A7A"
        strokeLinecap="round"
        strokeWidth="4"
        d="M403.275 432.997L371.93 464.343"
      ></path>
      <path
        stroke="#7A7A7A"
        strokeLinecap="round"
        strokeWidth="4"
        d="M403.275 432.997L371.93 464.343"
      ></path>
      <path
        stroke="#7A7A7A"
        strokeLinecap="round"
        strokeWidth="4"
        d="M403.275 432.997L371.93 464.343"
      ></path>
      <path
        stroke="#7A7A7A"
        strokeDasharray="7 7"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M371.619 463.946l3.547 3.546c14.051 14.052 36.834 14.052 50.885 0v0"
      ></path>
      <path
        stroke="#7A7A7A"
        strokeDasharray="7 7"
        strokeWidth="2"
        d="M426.051 467.492v0c-14.051 14.052-14.051 36.834 0 50.886l.718.718"
      ></path>
      <path
        stroke="#7A7A7A"
        strokeLinecap="round"
        strokeWidth="4"
        d="M252 704L209 704"
      ></path>
      <path
        stroke="#7A7A7A"
        strokeDasharray="7 7"
        strokeLinecap="round"
        strokeWidth="2"
        d="M209 705v0c0 22.091 17.909 40 40 40h3"
      ></path>
      <path
        stroke="#7A7A7A"
        strokeLinecap="round"
        strokeWidth="4"
        d="M369 330L326 330"
      ></path>
      <path
        stroke="#7A7A7A"
        strokeDasharray="7 7"
        strokeLinecap="round"
        strokeWidth="2"
        d="M327 330v3c0 24.301 19.699 44 44 44v0"
      ></path>
      <path stroke="#7A7A7A" strokeWidth="7" d="M369.5 376L369.5 400"></path>
      <path
        fill="#7A7A7A"
        d="M899.723 663l-5.334-6.531V663h-2.94v-14.658h2.94v6.573l5.334-6.573h3.549l-6.048 7.266L903.44 663h-3.717zm8.591-14.658V663h-2.94v-14.658h2.94zm12.88 0v2.373h-3.906V663h-2.94v-12.285h-3.906v-2.373h10.752zm1.431 7.308c0-1.442.322-2.73.966-3.864a6.972 6.972 0 012.667-2.667c1.134-.644 2.401-.966 3.801-.966 1.638 0 3.073.42 4.305 1.26 1.232.84 2.093 2.002 2.583 3.486h-3.381c-.336-.7-.812-1.225-1.428-1.575-.602-.35-1.302-.525-2.1-.525-.854 0-1.617.203-2.289.609-.658.392-1.176.952-1.554 1.68-.364.728-.546 1.582-.546 2.562 0 .966.182 1.82.546 2.562a4.253 4.253 0 001.554 1.701c.672.392 1.435.588 2.289.588.798 0 1.498-.175 2.1-.525.616-.364 1.092-.896 1.428-1.596h3.381c-.49 1.498-1.351 2.667-2.583 3.507-1.218.826-2.653 1.239-4.305 1.239-1.4 0-2.667-.315-3.801-.945a7.17 7.17 0 01-2.667-2.667c-.644-1.134-.966-2.422-.966-3.864zm28.992-7.308V663h-2.94v-6.237h-6.279V663h-2.94v-14.658h2.94v6.027h6.279v-6.027h2.94zm5.834 2.373v3.675h4.935v2.331h-4.935v3.885h5.565V663h-8.505v-14.679h8.505v2.394h-5.565zM978.224 663h-2.94l-6.657-10.059V663h-2.94v-14.679h2.94l6.657 10.08v-10.08h2.94V663zM588.424 648.342v2.373h-3.906V663h-2.94v-12.285h-3.906v-2.373h10.752zm8.949 14.805c-1.372 0-2.632-.322-3.78-.966a7.235 7.235 0 01-2.73-2.667c-.672-1.148-1.008-2.443-1.008-3.885 0-1.428.336-2.709 1.008-3.843a7.19 7.19 0 012.73-2.688c1.148-.644 2.408-.966 3.78-.966 1.386 0 2.646.322 3.78.966a7.038 7.038 0 012.709 2.688c.672 1.134 1.008 2.415 1.008 3.843 0 1.442-.336 2.737-1.008 3.885a7.082 7.082 0 01-2.709 2.667c-1.148.644-2.408.966-3.78.966zm0-2.625c.882 0 1.659-.196 2.331-.588.672-.406 1.197-.98 1.575-1.722.378-.742.567-1.603.567-2.583 0-.98-.189-1.834-.567-2.562-.378-.742-.903-1.309-1.575-1.701-.672-.392-1.449-.588-2.331-.588-.882 0-1.666.196-2.352.588-.672.392-1.197.959-1.575 1.701-.378.728-.567 1.582-.567 2.562 0 .98.189 1.841.567 2.583.378.742.903 1.316 1.575 1.722.686.392 1.47.588 2.352.588zm12.624-12.18V663h-2.94v-14.658h2.94zm5.845 12.327h4.83V663h-7.77v-14.658h2.94v12.327zm9.639-9.954v3.675h4.935v2.331h-4.935v3.885h5.565V663h-8.505v-14.679h8.505v2.394h-5.565zm18.212-2.373v2.373h-3.906V663h-2.94v-12.285h-3.906v-2.373h10.752z"
      ></path>
      <path
        fill="#F59E0B"
        d="M322.616 611.342L317.24 626h-3.57l-5.376-14.658h3.15l4.032 11.655 4.011-11.655h3.129zm4.703 0V626h-2.94v-14.658h2.94zm13.593 4.536c0 .784-.189 1.519-.567 2.205-.364.686-.945 1.239-1.743 1.659-.784.42-1.778.63-2.982.63h-2.457V626h-2.94v-14.658h5.397c1.134 0 2.1.196 2.898.588.798.392 1.393.931 1.785 1.617.406.686.609 1.463.609 2.331zm-5.418 2.121c.812 0 1.414-.182 1.806-.546.392-.378.588-.903.588-1.575 0-1.428-.798-2.142-2.394-2.142h-2.331v4.263h2.331zm20.07 8.001l-3.234-5.712h-1.386V626h-2.94v-14.658h5.502c1.134 0 2.1.203 2.898.609.798.392 1.393.931 1.785 1.617.406.672.609 1.428.609 2.268a4.41 4.41 0 01-.84 2.625c-.56.77-1.393 1.302-2.499 1.596l3.507 5.943h-3.402zm-4.62-7.917h2.457c.798 0 1.393-.189 1.785-.567.392-.392.588-.931.588-1.617 0-.672-.196-1.19-.588-1.554-.392-.378-.987-.567-1.785-.567h-2.457v4.305zm17.317 8.064c-1.372 0-2.632-.322-3.78-.966a7.235 7.235 0 01-2.73-2.667c-.672-1.148-1.008-2.443-1.008-3.885 0-1.428.336-2.709 1.008-3.843a7.19 7.19 0 012.73-2.688c1.148-.644 2.408-.966 3.78-.966 1.386 0 2.646.322 3.78.966a7.038 7.038 0 012.709 2.688c.672 1.134 1.008 2.415 1.008 3.843 0 1.442-.336 2.737-1.008 3.885a7.082 7.082 0 01-2.709 2.667c-1.148.644-2.408.966-3.78.966zm0-2.625c.882 0 1.659-.196 2.331-.588.672-.406 1.197-.98 1.575-1.722.378-.742.567-1.603.567-2.583 0-.98-.189-1.834-.567-2.562-.378-.742-.903-1.309-1.575-1.701-.672-.392-1.449-.588-2.331-.588-.882 0-1.666.196-2.352.588-.672.392-1.197.959-1.575 1.701-.378.728-.567 1.582-.567 2.562 0 .98.189 1.841.567 2.583.378.742.903 1.316 1.575 1.722.686.392 1.47.588 2.352.588zm16.488 2.625c-1.372 0-2.632-.322-3.78-.966a7.235 7.235 0 01-2.73-2.667c-.672-1.148-1.008-2.443-1.008-3.885 0-1.428.336-2.709 1.008-3.843a7.19 7.19 0 012.73-2.688c1.148-.644 2.408-.966 3.78-.966 1.386 0 2.646.322 3.78.966a7.038 7.038 0 012.709 2.688c.672 1.134 1.008 2.415 1.008 3.843 0 1.442-.336 2.737-1.008 3.885a7.082 7.082 0 01-2.709 2.667c-1.148.644-2.408.966-3.78.966zm0-2.625c.882 0 1.659-.196 2.331-.588.672-.406 1.197-.98 1.575-1.722.378-.742.567-1.603.567-2.583 0-.98-.189-1.834-.567-2.562-.378-.742-.903-1.309-1.575-1.701-.672-.392-1.449-.588-2.331-.588-.882 0-1.666.196-2.352.588-.672.392-1.197.959-1.575 1.701-.378.728-.567 1.582-.567 2.562 0 .98.189 1.841.567 2.583.378.742.903 1.316 1.575 1.722.686.392 1.47.588 2.352.588zm25.665-12.18V626h-2.94v-9.534L403.547 626h-2.226l-3.948-9.534V626h-2.94v-14.658h3.339l4.662 10.899 4.662-10.899h3.318z"
      ></path>
      <path
        fill="#84CC16"
        d="M220.886 264.147c-1.372 0-2.632-.322-3.78-.966a7.235 7.235 0 01-2.73-2.667c-.672-1.148-1.008-2.443-1.008-3.885 0-1.428.336-2.709 1.008-3.843a7.19 7.19 0 012.73-2.688c1.148-.644 2.408-.966 3.78-.966 1.386 0 2.646.322 3.78.966a7.038 7.038 0 012.709 2.688c.672 1.134 1.008 2.415 1.008 3.843 0 1.442-.336 2.737-1.008 3.885a7.082 7.082 0 01-2.709 2.667c-1.148.644-2.408.966-3.78.966zm0-2.625c.882 0 1.659-.196 2.331-.588.672-.406 1.197-.98 1.575-1.722.378-.742.567-1.603.567-2.583 0-.98-.189-1.834-.567-2.562-.378-.742-.903-1.309-1.575-1.701-.672-.392-1.449-.588-2.331-.588-.882 0-1.666.196-2.352.588-.672.392-1.197.959-1.575 1.701-.378.728-.567 1.582-.567 2.562 0 .98.189 1.841.567 2.583.378.742.903 1.316 1.575 1.722.686.392 1.47.588 2.352.588zm12.583-12.18v9.072c0 .994.259 1.757.777 2.289.518.518 1.246.777 2.184.777.952 0 1.687-.259 2.205-.777.518-.532.777-1.295.777-2.289v-9.072h2.961v9.051c0 1.246-.273 2.303-.819 3.171a5.068 5.068 0 01-2.163 1.932c-.896.434-1.897.651-3.003.651-1.092 0-2.086-.217-2.982-.651a4.99 4.99 0 01-2.1-1.932c-.518-.868-.777-1.925-.777-3.171v-9.051h2.94zm21.719 0v2.373h-3.906V264h-2.94v-12.285h-3.906v-2.373h10.752zm7.269 0c1.54 0 2.891.301 4.053.903 1.176.602 2.079 1.463 2.709 2.583.644 1.106.966 2.394.966 3.864 0 1.47-.322 2.758-.966 3.864-.63 1.092-1.533 1.939-2.709 2.541-1.162.602-2.513.903-4.053.903h-5.124v-14.658h5.124zm-.105 12.159c1.54 0 2.73-.42 3.57-1.26.84-.84 1.26-2.023 1.26-3.549 0-1.526-.42-2.716-1.26-3.57-.84-.868-2.03-1.302-3.57-1.302h-2.079v9.681h2.079zm16.838 2.646c-1.372 0-2.632-.322-3.78-.966a7.235 7.235 0 01-2.73-2.667c-.672-1.148-1.008-2.443-1.008-3.885 0-1.428.336-2.709 1.008-3.843a7.19 7.19 0 012.73-2.688c1.148-.644 2.408-.966 3.78-.966 1.386 0 2.646.322 3.78.966a7.038 7.038 0 012.709 2.688c.672 1.134 1.008 2.415 1.008 3.843 0 1.442-.336 2.737-1.008 3.885a7.082 7.082 0 01-2.709 2.667c-1.148.644-2.408.966-3.78.966zm0-2.625c.882 0 1.659-.196 2.331-.588.672-.406 1.197-.98 1.575-1.722.378-.742.567-1.603.567-2.583 0-.98-.189-1.834-.567-2.562-.378-.742-.903-1.309-1.575-1.701-.672-.392-1.449-.588-2.331-.588-.882 0-1.666.196-2.352.588-.672.392-1.197.959-1.575 1.701-.378.728-.567 1.582-.567 2.562 0 .98.189 1.841.567 2.583.378.742.903 1.316 1.575 1.722.686.392 1.47.588 2.352.588zm16.488 2.625c-1.372 0-2.632-.322-3.78-.966a7.235 7.235 0 01-2.73-2.667c-.672-1.148-1.008-2.443-1.008-3.885 0-1.428.336-2.709 1.008-3.843a7.19 7.19 0 012.73-2.688c1.148-.644 2.408-.966 3.78-.966 1.386 0 2.646.322 3.78.966a7.038 7.038 0 012.709 2.688c.672 1.134 1.008 2.415 1.008 3.843 0 1.442-.336 2.737-1.008 3.885a7.082 7.082 0 01-2.709 2.667c-1.148.644-2.408.966-3.78.966zm0-2.625c.882 0 1.659-.196 2.331-.588.672-.406 1.197-.98 1.575-1.722.378-.742.567-1.603.567-2.583 0-.98-.189-1.834-.567-2.562-.378-.742-.903-1.309-1.575-1.701-.672-.392-1.449-.588-2.331-.588-.882 0-1.666.196-2.352.588-.672.392-1.197.959-1.575 1.701-.378.728-.567 1.582-.567 2.562 0 .98.189 1.841.567 2.583.378.742.903 1.316 1.575 1.722.686.392 1.47.588 2.352.588zM312.923 264l-3.234-5.712h-1.386V264h-2.94v-14.658h5.502c1.134 0 2.1.203 2.898.609.798.392 1.393.931 1.785 1.617.406.672.609 1.428.609 2.268a4.41 4.41 0 01-.84 2.625c-.56.77-1.393 1.302-2.499 1.596l3.507 5.943h-3.402zm-4.62-7.917h2.457c.798 0 1.393-.189 1.785-.567.392-.392.588-.931.588-1.617 0-.672-.196-1.19-.588-1.554-.392-.378-.987-.567-1.785-.567h-2.457v4.305z"
      ></path>
      <path
        fill="#DC2626"
        d="M131.046 437.342V452h-2.94v-9.534L124.179 452h-2.226l-3.948-9.534V452h-2.94v-14.658h3.339l4.662 10.899 4.662-10.899h3.318zm5.847 2.373v3.675h4.935v2.331h-4.935v3.885h5.565V452h-8.505v-14.679h8.505v2.394h-5.565zm11.177 0v3.675h4.935v2.331h-4.935v3.885h5.565V452h-8.505v-14.679h8.505v2.394h-5.565zm18.211-2.373v2.373h-3.906V452h-2.94v-12.285h-3.906v-2.373h10.752zm5.086 0V452h-2.94v-14.658h2.94zM186.808 452h-2.94l-6.657-10.059V452h-2.94v-14.679h2.94l6.657 10.08v-10.08h2.94V452zm13.112-10.248a3.442 3.442 0 00-1.386-1.407c-.588-.322-1.274-.483-2.058-.483-.868 0-1.638.196-2.31.588a4.061 4.061 0 00-1.575 1.68c-.378.728-.567 1.568-.567 2.52 0 .98.189 1.834.567 2.562a4.157 4.157 0 001.617 1.68c.686.392 1.484.588 2.394.588 1.12 0 2.037-.294 2.751-.882.714-.602 1.183-1.435 1.407-2.499h-5.04v-2.247h7.938v2.562a6.886 6.886 0 01-1.26 2.835c-.644.868-1.477 1.568-2.499 2.1-1.008.518-2.142.777-3.402.777-1.414 0-2.695-.315-3.843-.945a7.125 7.125 0 01-2.688-2.667c-.644-1.134-.966-2.422-.966-3.864 0-1.442.322-2.73.966-3.864a6.93 6.93 0 012.688-2.667c1.148-.644 2.422-.966 3.822-.966 1.652 0 3.087.406 4.305 1.218 1.218.798 2.058 1.925 2.52 3.381h-3.381zM135.35 484l-3.234-5.712h-1.386V484h-2.94v-14.658h5.502c1.134 0 2.1.203 2.898.609.798.392 1.393.931 1.785 1.617.406.672.609 1.428.609 2.268a4.41 4.41 0 01-.84 2.625c-.56.77-1.393 1.302-2.499 1.596l3.507 5.943h-3.402zm-4.62-7.917h2.457c.798 0 1.393-.189 1.785-.567.392-.392.588-.931.588-1.617 0-.672-.196-1.19-.588-1.554-.392-.378-.987-.567-1.785-.567h-2.457v4.305zm17.317 8.064c-1.372 0-2.632-.322-3.78-.966a7.235 7.235 0 01-2.73-2.667c-.672-1.148-1.008-2.443-1.008-3.885 0-1.428.336-2.709 1.008-3.843a7.19 7.19 0 012.73-2.688c1.148-.644 2.408-.966 3.78-.966 1.386 0 2.646.322 3.78.966a7.038 7.038 0 012.709 2.688c.672 1.134 1.008 2.415 1.008 3.843 0 1.442-.336 2.737-1.008 3.885a7.082 7.082 0 01-2.709 2.667c-1.148.644-2.408.966-3.78.966zm0-2.625c.882 0 1.659-.196 2.331-.588.672-.406 1.197-.98 1.575-1.722.378-.742.567-1.603.567-2.583 0-.98-.189-1.834-.567-2.562-.378-.742-.903-1.309-1.575-1.701-.672-.392-1.449-.588-2.331-.588-.882 0-1.666.196-2.352.588-.672.392-1.197.959-1.575 1.701-.378.728-.567 1.582-.567 2.562 0 .98.189 1.841.567 2.583.378.742.903 1.316 1.575 1.722.686.392 1.47.588 2.352.588zm16.489 2.625c-1.372 0-2.632-.322-3.78-.966a7.235 7.235 0 01-2.73-2.667c-.672-1.148-1.008-2.443-1.008-3.885 0-1.428.336-2.709 1.008-3.843a7.19 7.19 0 012.73-2.688c1.148-.644 2.408-.966 3.78-.966 1.386 0 2.646.322 3.78.966a7.038 7.038 0 012.709 2.688c.672 1.134 1.008 2.415 1.008 3.843 0 1.442-.336 2.737-1.008 3.885a7.082 7.082 0 01-2.709 2.667c-1.148.644-2.408.966-3.78.966zm0-2.625c.882 0 1.659-.196 2.331-.588.672-.406 1.197-.98 1.575-1.722.378-.742.567-1.603.567-2.583 0-.98-.189-1.834-.567-2.562-.378-.742-.903-1.309-1.575-1.701-.672-.392-1.449-.588-2.331-.588-.882 0-1.666.196-2.352.588-.672.392-1.197.959-1.575 1.701-.378.728-.567 1.582-.567 2.562 0 .98.189 1.841.567 2.583.378.742.903 1.316 1.575 1.722.686.392 1.47.588 2.352.588zm25.665-12.18V484h-2.94v-9.534L183.334 484h-2.226l-3.948-9.534V484h-2.94v-14.658h3.339l4.662 10.899 4.662-10.899h3.318z"
      ></path>
      <path stroke="#7A7A7A" strokeWidth="7" d="M60 401.5L372 401.5"></path>
      </g>

      
    </svg>
  );
}

export default FloorPlan