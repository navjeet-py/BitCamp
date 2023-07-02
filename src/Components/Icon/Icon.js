import React from "react";


const Icon = (props) => {

    const type = props.type;

    const typess = [
        'arrow', 'python', 'expander', 'whatsapp',

    ]


    if (type === 'arrow') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14.829" viewBox="0 0 18 14.829">
                <g id="_884b960d4e310abd07d33297d22222bb" data-name="884b960d4e310abd07d33297d22222bb"
                   transform="translate(0 0.414)">
                    <path id="Path_8" data-name="Path 8" d="M1,7H17M11,1l6,6-6,6" fill="none" stroke="#000"
                          strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fillRule="evenodd"/>
                </g>
            </svg>
        )
    } else if (type === 'python') {
        return (
            <svg id="_88040dd7380f6e48df2ca392b392ea78" data-name="88040dd7380f6e48df2ca392b392ea78"
                 xmlns="http://www.w3.org/2000/svg" width="17.479" height="17.48" viewBox="0 0 17.479 17.48">
                <path id="Path_3" data-name="Path 3" d="M18.231,7.356h0v0Z" transform="translate(-4.954 -1.998)"/>
                <path id="Path_4" data-name="Path 4"
                      d="M16.811,14.589c1.213,0,1.662-.846,2.084-2.115a7.132,7.132,0,0,0,0-4.237c-.3-1.205-.87-2.115-2.084-2.115H15.248V7.973a2.676,2.676,0,0,1-2.606,2.645H8.475a2.126,2.126,0,0,0-2.084,2.119v3.972c0,1.131.983,1.795,2.084,2.119a7.017,7.017,0,0,0,4.167,0c1.049-.3,2.084-.918,2.084-2.119V15.12H10.561v-.53h6.25ZM12.9,16.178a.794.794,0,1,1-.784.792.789.789,0,0,1,.784-.792Z"
                      transform="translate(-1.737 -1.664)" fill="#f2bb30"/>
                <path id="Path_5" data-name="Path 5"
                      d="M2.508,12.927H3.94v-1.9A2.65,2.65,0,0,1,6.546,8.431h4.167A2.1,2.1,0,0,0,12.8,6.312V2.337A2.328,2.328,0,0,0,10.713.168a12.847,12.847,0,0,0-4.167,0h0C4.783.484,4.464,1.135,4.464,2.34V3.929H8.635V4.46H2.9A2.6,2.6,0,0,0,.293,6.575a7.818,7.818,0,0,0,0,4.237C.589,12.045,1.3,12.927,2.508,12.927ZM6.285,2.867a.794.794,0,1,1,.784-.792A.789.789,0,0,1,6.285,2.867Z"
                      transform="translate(0 -0.001)" fill="#35668f"/>
            </svg>
        )
    } else if (type === 'expander') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="8.898" height="12.435" viewBox="0 0 8.898 12.435">
                <path id="_05d672bf2ec15f434a544f7a2214100f" data-name="05d672bf2ec15f434a544f7a2214100f"
                      d="M18.137,11.5,13.318,18,8.5,11.5" transform="translate(-10.101 19.536) rotate(-90)" fill="none"
                      stroke="#061d35" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                      strokeWidth="2"/>
            </svg>

        )
    } else if (type === 'whatsapp') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="19.906" height="20.025" viewBox="0 0 19.906 20.025">
                <path id="_73c0482f37cd99b2b06cd7d3eba8c43e" data-name="73c0482f37cd99b2b06cd7d3eba8c43e"
                      d="M16.6,14c-.2-.1-1.5-.7-1.7-.8a.471.471,0,0,0-.6.1c-.2.2-.6.8-.8,1-.1.2-.3.2-.5.1a8.175,8.175,0,0,1-2-1.2,11.511,11.511,0,0,1-1.4-1.7.44.44,0,0,1,.1-.5c.1-.1.2-.3.4-.4a.758.758,0,0,0,.2-.4.3.3,0,0,0,0-.4A17.776,17.776,0,0,1,9.5,8c-.1-.7-.3-.7-.5-.7H8.5a1.141,1.141,0,0,0-.6.3A2.878,2.878,0,0,0,7,9.7a5.238,5.238,0,0,0,1,2.6A10.662,10.662,0,0,0,12.2,16a7.838,7.838,0,0,0,1.4.5,2.856,2.856,0,0,0,1.6.1,2.591,2.591,0,0,0,1.7-1.2,1.672,1.672,0,0,0,.1-1.2l-.4-.2m2.5-9.1a9.968,9.968,0,0,0-15.7,12L2,22l5.3-1.4a9.881,9.881,0,0,0,14.6-8.7,9.74,9.74,0,0,0-2.8-7m-2.7,14A8.392,8.392,0,0,1,12,20.2a8.769,8.769,0,0,1-4.2-1.1l-.3-.2-3.1.8.8-3L5,16.4A8.4,8.4,0,0,1,7.7,4.9,8.135,8.135,0,0,1,19,7.5a8.252,8.252,0,0,1-2.6,11.4"
                      transform="translate(-2 -1.975)" fill="#fff"/>
            </svg>

        )
    } else if (type === 'html') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="109.936" height="124.678" viewBox="0 0 109.936 124.678">
                <g id="e0180469d4218430f2083a6a6d8f4f0a" transform="translate(-9.032 -1.661)">
                    <path id="Path_89" data-name="Path 89"
                          d="M19.037,113.876,9.032,1.661H118.968l-10.016,112.2-45.019,12.48Z" fill="#e44d26"/>
                    <path id="Path_90" data-name="Path 90" d="M64,116.8l36.378-10.086,8.559-95.878H64Z" fill="#f16529"/>
                    <path id="Path_91" data-name="Path 91"
                          d="M64,52.455H45.788L44.53,38.361H64V24.6H29.489l.33,3.692L33.2,66.218H64ZM64,88.2l-.061.017-15.327-4.14L47.633,73.1H33.816l1.928,21.609,28.193,7.826.063-.017Z"
                          fill="#ebebeb"/>
                    <path id="Path_92" data-name="Path 92"
                          d="M63.952,52.455V66.218H80.9L79.3,84.067,63.952,88.21v14.319l28.215-7.82.207-2.325,3.234-36.233.335-3.7H63.952Zm0-27.856V38.361H97.2l.276-3.092.628-6.978.329-3.692Z"
                          fill="#fff"/>
                </g>
            </svg>
        )
    } else if (type === 'css') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="110.48" height="125.297" viewBox="0 0 110.48 125.297">
                <g id="da41813adf9d28a6f767a767f6567036" transform="translate(-8.76 -1.352)">
                    <path id="Path_89" data-name="Path 89"
                          d="M18.814,114.123,8.76,1.352H119.24L109.176,114.106,63.933,126.649,18.814,114.123Z"
                          fill="#1572b6"/>
                    <path id="Path_90" data-name="Path 90" d="M64,117.062l36.559-10.136,8.6-96.354H64v106.49Z"
                          fill="#33a9dc"/>
                    <path id="Path_91" data-name="Path 91"
                          d="M64,51.429H82.3l1.264-14.163H64V23.435H98.683l-.332,3.711-3.4,38.114H64V51.429Z"
                          fill="#fff"/>
                    <path id="Path_92" data-name="Path 92"
                          d="M64.083,87.349l-.061.018-15.4-4.159-.985-11.031H33.752l1.937,21.717,28.331,7.863.063-.018V87.349Z"
                          fill="#ebebeb"/>
                    <path id="Path_93" data-name="Path 93"
                          d="M81.127,64.675,79.461,83.2,64.035,87.361v14.39l28.354-7.858.208-2.337L95,64.675H81.127Z"
                          fill="#fff"/>
                    <path id="Path_94" data-name="Path 94"
                          d="M64.048,23.435V37.266H30.64l-.277-3.108-.63-7.012L29.4,23.435H64.048Zm-.047,28V65.262H48.792l-.277-3.108-.631-7.012-.33-3.711Z"
                          fill="#ebebeb"/>
                </g>
            </svg>
        )
    } else if (type === 'js') {
        return (
            <svg id="_3b3ec29c3a70af7c029374ef1b66db20" data-name="3b3ec29c3a70af7c029374ef1b66db20"
                 xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
                <path id="Path_89" data-name="Path 89" d="M0,0H256V256H0Z" fill="#f7df1e"/>
                <path id="Path_90" data-name="Path 90"
                      d="M67.312,213.932,86.9,202.076c3.78,6.7,7.218,12.371,15.465,12.371,7.9,0,12.89-3.092,12.89-15.12v-81.8h24.057v82.138c0,24.917-14.606,36.259-35.916,36.259-19.245,0-30.416-9.967-36.087-22m85.07-2.576,19.588-11.341c5.157,8.421,11.859,14.607,23.715,14.607,9.969,0,16.325-4.984,16.325-11.858,0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257,0-18.044,13.747-31.792,35.228-31.792,15.294,0,26.292,5.328,34.2,19.247L210.29,147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046,0-11.514,4.468-11.514,10.31,0,7.217,4.468,10.14,14.778,14.608l6.014,2.577c20.45,8.765,31.963,17.7,31.963,37.8,0,21.654-17.012,33.51-39.867,33.51-22.339,0-36.774-10.654-43.819-24.574"/>
            </svg>
        )
    } else if (type === 'react') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="17.792" height="20" viewBox="0 0 17.792 20">
                <path id="_7fd8a396bcd3be003b79e44d9bd9d15a" data-name="7fd8a396bcd3be003b79e44d9bd9d15a"
                      d="M11.1,10.438a1.786,1.786,0,1,0,2.44.654A1.786,1.786,0,0,0,11.1,10.438Zm8,1.938q-.176-.2-.371-.4.136-.143.264-.286c1.606-1.8,2.284-3.614,1.656-4.7-.6-1.043-2.393-1.354-4.636-.918q-.331.065-.659.146Q15.3,6,15.228,5.783C14.467,3.49,13.238,2,11.982,2c-1.2,0-2.368,1.4-3.111,3.557q-.11.32-.2.645-.219-.054-.44-.1c-2.366-.486-4.272-.166-4.9.923-.6,1.044.028,2.75,1.529,4.472q.223.256.459.5c-.185.191-.361.382-.525.572-1.465,1.7-2.057,3.376-1.457,4.415.62,1.073,2.5,1.424,4.785.974q.278-.055.553-.124.1.352.221.7c.739,2.117,1.9,3.469,3.1,3.468,1.239,0,2.482-1.453,3.235-3.659.059-.174.116-.355.169-.542q.355.088.715.157c2.2.417,3.953.089,4.551-.951.618-1.074-.019-2.876-1.554-4.63ZM4.07,7.452c.386-.67,1.943-.931,3.986-.512q.2.04.4.09a20.463,20.463,0,0,0-.421,2.678A20.887,20.887,0,0,0,5.93,11.4q-.219-.227-.427-.465h0C4.216,9.461,3.708,8.081,4.07,7.452ZM7.957,13.18C7.446,12.793,6.972,12.4,6.541,12c.43-.4.905-.791,1.415-1.176q-.027.589-.027,1.179T7.957,13.18Zm0,3.941a7.237,7.237,0,0,1-2.64.093,1.766,1.766,0,0,1-1.241-.656c-.364-.631.112-1.978,1.364-3.43q.236-.273.488-.532a20.49,20.49,0,0,0,2.107,1.7,20.8,20.8,0,0,0,.426,2.712Q8.21,17.07,7.956,17.121Zm7.1-8.039q-.5-.317-1.019-.614t-1.027-.562c.593-.249,1.176-.462,1.739-.636a18.218,18.218,0,0,1,.307,1.812ZM9.679,5.835c.636-1.851,1.578-2.981,2.3-2.981.773,0,1.778,1.218,2.434,3.2q.064.194.121.389a20.478,20.478,0,0,0-2.527.971,20.061,20.061,0,0,0-2.519-.982Q9.578,6.131,9.679,5.835Zm-.4,1.424a18.307,18.307,0,0,1,1.73.642q-1.051.542-2.047,1.181C9.041,8.444,9.148,7.833,9.279,7.259ZM8.962,14.92q.5.318,1.008.613t1.057.576a18.2,18.2,0,0,1-1.744.665C9.152,16.191,9.044,15.569,8.962,14.92Zm5.456,3.146A7.236,7.236,0,0,1,13.18,20.4h0a1.766,1.766,0,0,1-1.188.747c-.728,0-1.658-1.085-2.29-2.9Q9.59,17.929,9.5,17.6a20.108,20.108,0,0,0,2.529-1.01,20.8,20.8,0,0,0,2.547.979q-.071.249-.155.494Zm.362-1.324c-.569-.176-1.161-.393-1.762-.646q.509-.268,1.025-.565t1.032-.627a18.153,18.153,0,0,1-.295,1.838ZM15.227,12q0,.911-.057,1.82c-.493.333-1.013.659-1.554.971s-1.073.6-1.6.856q-.827-.4-1.622-.854t-1.545-.969Q8.784,12.914,8.783,12h0q0-.912.068-1.822c.493-.336,1.009-.662,1.543-.97s1.077-.594,1.615-.852q.817.4,1.6.851t1.549.959q.065.914.065,1.832Zm.957-5.093c1.921-.374,3.37-.122,3.733.506.387.67-.167,2.148-1.554,3.706h0q-.115.129-.238.259A20.061,20.061,0,0,0,15.98,9.689a20.041,20.041,0,0,0-.405-2.649q.31-.076.609-.135Zm-.13,3.885a18.165,18.165,0,0,1,1.461,1.188,18.119,18.119,0,0,1-1.457,1.208q.023-.594.023-1.188t-.028-1.208Zm3.868,5.789c-.363.631-1.768.894-3.652.538q-.324-.061-.665-.146a20.069,20.069,0,0,0,.387-2.682,19.939,19.939,0,0,0,2.137-1.716q.176.183.336.365h0a7.234,7.234,0,0,1,1.4,2.238,1.766,1.766,0,0,1,.054,1.4Z"
                      transform="translate(-3.104 -2)"/>
            </svg>
        )
    } else if (type === 'django') {
        return (
            <svg id="de0266af4d4232e29c692eb76edf7036" xmlns="http://www.w3.org/2000/svg" width="255.187"
                 height="325.388" viewBox="0 0 255.187 325.388">
                <path id="Path_89" data-name="Path 89"
                      d="M114.784,0h53.278V244.191c-27.29,5.162-47.38,7.193-69.117,7.193C33.873,251.316,0,222.245,0,166.412,0,112.617,35.93,77.7,91.608,77.7a86.683,86.683,0,0,1,23.176,2.717V0Zm1.867,124.427a53.64,53.64,0,0,0-17.965-2.717c-26.947,0-42.512,16.437-42.512,45.243,0,28.046,14.88,43.532,42.17,43.532a125.7,125.7,0,0,0,18.307-1.351V124.427Z"
                      fill="#2ba977"/>
                <path id="Path_90" data-name="Path 90"
                      d="M255.187,84.26V206.523c0,42.1-3.154,62.353-12.411,79.81-8.64,16.783-20.022,27.366-43.541,39.055l-49.438-23.3c23.519-10.93,34.9-20.588,42.17-35.327,7.61-15.072,10.01-32.529,10.01-78.445V84.261h53.21ZM196.608,0h53.278V54.135H196.608Z"
                      fill="#2ba977"/>
            </svg>
        )
    } else if (type === 'numpy') {
        return (
            <svg id="numpy-seeklogo.com" xmlns="http://www.w3.org/2000/svg" width="256.001" height="273.611"
                 viewBox="0 0 256.001 273.611">
                <path id="Path_89" data-name="Path 89"
                      d="M191.548,186.292l.059,60.52-53.7,26.8V213.118ZM256,153.947v60.731l-45.8,22.859-.033-60.454Zm-64.532-48.66.059,59.885L137.9,191.819v-59.9ZM256,73.205v59.508L210.15,156.023l-.04-60Zm-126.262-7.04L177.672,90.36l-49.731,24.975L80.913,91.715ZM63.065,32.511l45.719,23.077L59.845,81.131,12.891,57.552Zm130.691.35L243,57.552l-44.04,22.119L150.926,55.443ZM128.232,0l44.33,22.225L130.056,44.919,84.377,21.881Z"
                      fill="#4dabcf"/>
                <path id="Path_90" data-name="Path 90"
                      d="M118.944,131.914,82.771,113.728v78.606S38.533,98.207,34.434,89.752c-.529-1.091-2.7-2.287-3.259-2.578C23.243,83.009,0,71.235,0,71.235V210.11L32.154,227.3V154.707s43.769,84.106,44.211,85.025,4.839,9.784,9.532,12.9c6.254,4.138,33.053,20.255,33.053,20.255Z"
                      fill="#4d77cf"/>
            </svg>
        )
    } else if (type === 'sklearn') {
        return (
            <svg id="Scikit_learn_logo_small" xmlns="http://www.w3.org/2000/svg" width="277.319" height="149.559"
                 viewBox="0 0 277.319 149.559">
                <g id="g3" transform="translate(-120.609 -220.26)">
                    <path id="path5"
                          d="M333.32,347.348c33.869-33.867,39.5-83.146,12.572-110.07s-76.2-21.293-110.066,12.572-24.07,98.568-12.57,110.07c9.293,9.293,76.2,21.293,110.064-12.572Z"
                          fill="#f89939"/>
                    <path id="path7"
                          d="M194.35,298.411c-19.648-19.648-48.242-22.919-63.867-7.3s-12.355,44.22,7.3,63.865,57.2,13.969,63.863,7.3C207.039,356.889,214,318.061,194.35,298.411Z"
                          fill="#3499cd"/>
                </g>
                <g id="g9" transform="translate(-120.609 -220.26)">
                    <g id="g11">
                        <path id="path13"
                              d="M262.143,339.047a54.64,54.64,0,0,1-9.133,7.068,14.959,14.959,0,0,1-7.488,2.279,8.006,8.006,0,0,1-6.607-3.178q-2.511-3.182-2.508-8.543,0-8.041,3.486-19.3a122.555,122.555,0,0,1,8.463-20.761l9.729-3.6a2.437,2.437,0,0,1,.691-.154c.738,0,1.348.544,1.816,1.627a11.2,11.2,0,0,1,.711,4.388A33.838,33.838,0,0,1,257.7,314a68.321,68.321,0,0,1-11.26,15.627q-.308,3.984-.307,5.477a9.872,9.872,0,0,0,1.225,5.285,3.7,3.7,0,0,0,3.256,1.953,8.25,8.25,0,0,0,4.406-1.49,52.576,52.576,0,0,0,7.121-6.207v4.4Zm-14.668-14.973a46.736,46.736,0,0,0,7.891-12.121q3.024-6.713,3.023-11.549a5.264,5.264,0,0,0-.418-2.278c-.281-.575-.641-.864-1.074-.864q-1.411,0-4.117,7.057a132.178,132.178,0,0,0-5.3,19.755Z"
                              fill="#010101"/>
                        <path id="path15"
                              d="M290.8,339.047a46.953,46.953,0,0,1-8.732,7.068,16.508,16.508,0,0,1-8.541,2.279,11.138,11.138,0,0,1-8.41-3.33,12.148,12.148,0,0,1-3.2-8.773A21.988,21.988,0,0,1,267.55,321.6q5.625-6.572,12.484-6.57a8.476,8.476,0,0,1,5.707,1.84,6.05,6.05,0,0,1,2.145,4.826q0,7.93-16.852,12.869,1.53,7.465,8,7.469a9.346,9.346,0,0,0,4.824-1.357,41.975,41.975,0,0,0,6.934-6.035v4.4Zm-20.07-7.084q9.8-2.76,9.8-10.188,0-3.676-2.68-3.676-2.529,0-4.824,3.85a19.3,19.3,0,0,0-2.3,10.014Z"
                              fill="#010101"/>
                        <path id="path17"
                              d="M331.7,339.047a81.26,81.26,0,0,1-8.77,7.588,9.177,9.177,0,0,1-5.057,1.76q-6.053,0-5.707-10.686a39.668,39.668,0,0,1-7.068,8.084,10.554,10.554,0,0,1-6.684,2.6,6.962,6.962,0,0,1-5.725-3.158,12.594,12.594,0,0,1-2.354-7.758,20.824,20.824,0,0,1,3.156-10.955,26,26,0,0,1,8.1-8.424q4.939-3.217,8.732-3.219a6.777,6.777,0,0,1,6.7,4.4l7.828-4.326h2.148l-3.381,11.221q-2.6,8.467-2.607,11.607,0,3.293,2.336,3.293a5.227,5.227,0,0,0,3.291-1.59q1.8-1.592,5.053-4.846v4.4Zm-28.037,2.109q3.83,0,7.223-6.529a26.446,26.446,0,0,0,3.389-12.049,5.278,5.278,0,0,0-.957-3.35,3.107,3.107,0,0,0-2.566-1.207q-3.832,0-7.258,6.512a26.053,26.053,0,0,0-3.43,11.986,5.252,5.252,0,0,0,1.016,3.354,3.148,3.148,0,0,0,2.583,1.283Z"
                              fill="#010101"/>
                        <path id="path19"
                              d="M360.314,339.047q-9.615,9.422-14.824,9.424a4.915,4.915,0,0,1-3.945-1.969,7.5,7.5,0,0,1-1.609-4.887q0-5.4,5.785-14.477a21.357,21.357,0,0,1-6.2,2.029,44.01,44.01,0,0,1-7.814,9.879h-.879V335.6a50.23,50.23,0,0,0,5.4-6.666q-3.3-1.457-3.3-4.326a12.336,12.336,0,0,1,2.012-6.3,6.184,6.184,0,0,1,5.535-3.348q2.988,0,2.986,3.062a21.07,21.07,0,0,1-1.725,6.895q6.357-.691,11.109-9.729l3.484-.154-3.562,9.8q-2.22,6.205-2.871,8.447a14.468,14.468,0,0,0-.652,3.963,4.062,4.062,0,0,0,.746,2.566,2.41,2.41,0,0,0,2.012.959,4.393,4.393,0,0,0,2.643-.936q1.263-.947,5.67-5.193v4.4Z"
                              fill="#010101"/>
                        <path id="path21"
                              d="M397.928,339.047q-8.847,9.351-15.168,9.348a5.221,5.221,0,0,1-4.137-1.8,7.066,7.066,0,0,1-1.572-4.824q0-4.1,3.373-12.523,1.8-4.521,1.8-5.746c0-.818-.322-1.227-.957-1.227a3.01,3.01,0,0,0-1.418.535,17.426,17.426,0,0,0-1.879,1.5q-.955.879-2.145,2.141-1.037,1.082-2.219,2.453l-2.148,2.492a7.9,7.9,0,0,0-1.76,3.637,57.947,57.947,0,0,0-.768,5.979q-.117,2.025-.115,5.477l-8.465,1.988q-.418-5.17-.422-7.7a46.122,46.122,0,0,1,1.438-11.682,75.56,75.56,0,0,1,4.615-12.412l9.344-1.8a89.166,89.166,0,0,0-3.867,12.484,73.762,73.762,0,0,1,9.969-9.709q3.686-2.7,6.557-2.7a4.156,4.156,0,0,1,3.25,1.471,5.367,5.367,0,0,1,1.3,3.689q0,3.674-3.291,12.1-2.262,5.781-2.262,7.51,0,2.305,1.881,2.3,2.8,0,9.064-7.393Z"
                              fill="#010101"/>
                    </g>
                </g>
                <text id="text25" transform="translate(153.333 81.946)" fill="#fff" fontSize="23.08"
                      fontFamily="Poppins">
                    <tspan x="0" y="0">scikit</tspan>
                </text>
            </svg>
        )
    } else if (type === 'ml') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="128" height="128"
                 viewBox="0 0 128 128">
                <image id="coding_1_" data-name="coding (1)" width="128" height="128"
                       xlinkHref="data:image/png;base64,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"/>
            </svg>

        )
    } else {
        return (
            <span>
                Undefined Type
            </span>
        )
    }
}

export default Icon;