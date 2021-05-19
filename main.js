///// SUBJECT /////
let subject = "intro";
function changeSubject(text) {
  console.log(text);
  subject = text;
}

///// BUTTONS /////
let btnChat = document.getElementById("btn-chat");
btnChat.addEventListener("click", function() {
  chatBox = !chatBox;
  updateLayout();
});

///// MAIN TOGGELS for LAYOUT /////
let speakerView = false;
let chatBox = false;

///// SPEAKER VIEW /////
let speakerDiv = document.getElementById("speaker-container");
let speakerDivW = 60;
let speakerVideo = document.createElement("video");
speakerVideo.src = "";
speakerVideo.style.width = "100%";
speakerDiv.appendChild(speakerVideo);
speakerDiv.addEventListener("click", function() {
  speakerView = false;
  speakerVideo.pause();
  speakerVideo.currentTime = 0;
  updateLayout();
});

///// CHAT BOX /////
let chatDiv = document.getElementById("chat-container");
let chatDivW = 25;

///// VIDEO VIEW /////
let videoDiv = document.getElementById("video-container");
let videos = [];
let videoSrcs = {
  idle: [
    {
      name: "Eliza",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fempty-eliza.mp4?v=1620789614028"
    },
    {
      name: "Guanqiang",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fempty-guanqiang.mp4?v=1620789620401"
    },
    {
      name: "Moon",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fempty-moon.mp4?v=1620789618427"
    },
    {
      name: "Shenyan",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fempty-shenyan.mp4?v=1621201443481"
    },
    {
      name: "Pya",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fempty-pya.mp4?v=1620789625690"
    },
    {
      name: "Zhangyong",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fempty-zhangyong.mp4?v=1621176377581"
    },
    {
      name: "Wenglan",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fempty-wenglan.mp4?v=1621175443465"
    },
    {
      name: "Zain",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fempty-zain.mp4?v=1621173555171"
    },
    {
      name: "Qiang",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fempty-qiang.mp4?v=1621176066594"
    },
    {
      name: "Justin",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fempty-justin.mp4?v=1621174325964"
    },
    {
      name: "Shengli",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fempty-shengli.mp4?v=1621174846817"
    }
  ],
  intro: [
    {
      name: "Eliza",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fwho-Liz.mp4?v=1621336916455"
    },
    {
      name: "Guanqiang",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fwho-guanqiang.mp4?v=1621227801007"
    },
    {
      name: "Moon",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fwho-moon.mp4?v=1621373545010"
    },
    {
      name: "Shenyan",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fwho-shenyan.mp4?v=1621380815678"
    },
    {
      name: "Pya",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fwho-pya.mp4?v=1621381209621"
    },
    {
      name: "Zhangyong",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fwho-zhangyong.mp4?v=1621367117415"
    },
    {
      name: "Wenglan",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fwho-wenglan.mp4?v=1621381504943"
    },
    {
      name: "Zain",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fwho-zain.mp4?v=1621378463543"
    },
    {
      name: "Qiang",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fwho-qiang.mp4?v=1621381118120"
    },
    {
      name: "Justin",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fwho-justin.mp4?v=1621376186253"
    },
    {
      name: "Shengli",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fwho-shengli.mp4?v=1621377163631"
    }
  ],
  food: [{
      name: "Eliza",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Ffood-liz.mp4?v=1621360201952"
    },
    {
      name: "Guanqiang",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fempty-guanqiang.mp4?v=1620789620401"
    },
    {
      name: "Moon",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Ffood-moon.mp4?v=1621374670979"
    },
    {
      name: "Shenyan",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fempty-shenyan.mp4?v=1621201443481"
    },
    {
      name: "Pya",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Ffood-pya.mp4?v=1621384313642"
    },
    {
      name: "Zhangyong",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Ffood-zhangyong.mp4?v=1621368664604"
    },
    {
      name: "Wenglan",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fempty-wenglan.mp4?v=1621175443465"
    },
    {
      name: "Zain",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Ffood-zain.mp4?v=1621385051191"
    },
    {
      name: "Qiang",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fempty-qiang.mp4?v=1621176066594"
    },
    {
      name: "Justin",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Ffood-justin.mp4?v=1621376532591"
    },
    {
      name: "Shengli",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Ffood-shengli.mp4?v=1621377908676"
    }],
  memory: [{
      name: "Eliza",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fmemory-liz.mp4?v=1621366097989"
    },
    {
      name: "Guanqiang",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fempty-guanqiang.mp4?v=1620789620401"
    },
    {
      name: "Moon",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fmemory-moon.mp4?v=1621374177693"
    },
    {
      name: "Shenyan",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fempty-shenyan.mp4?v=1621201443481"
    },
    {
      name: "Pya",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fempty-pya.mp4?v=1620789625690"
    },
    {
      name: "Zhangyong",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fmemory-zhangyong.mp4?v=1621369133394"
    },
    {
      name: "Wenglan",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fempty-wenglan.mp4?v=1621175443465"
    },
    {
      name: "Zain",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fmemory-zain.mp4?v=1621380386772"
    },
    {
      name: "Qiang",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fempty-qiang.mp4?v=1621176066594"
    },
    {
      name: "Justin",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fmemory-justin.mp4?v=1621376742084"
    },
    {
      name: "Shengli",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fmemory-shengli.mp4?v=1621377539369"
    }],
  color: [{
      name: "Eliza",
      src:
        "hhttps://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fcolor-liz.mp4?v=1621366094470"
    },
    {
      name: "Guanqiang",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fempty-guanqiang.mp4?v=1620789620401"
    },
    {
      name: "Moon",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fcolor-moon.mp4?v=1621375649441"
    },
    {
      name: "Shenyan",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fempty-shenyan.mp4?v=1621201443481"
    },
    {
      name: "Pya",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fempty-pya.mp4?v=1620789625690"
    },
    {
      name: "Zhangyong",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fcolor-zhangyong.mp4?v=1621368773296"
    },
    {
      name: "Wenglan",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fempty-wenglan.mp4?v=1621175443465"
    },
    {
      name: "Zain",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fcolor-zain.mp4?v=1621380228053"
    },
    {
      name: "Qiang",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fempty-qiang.mp4?v=1621176066594"
    },
    {
      name: "Justin",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fcolor-justin.mp4?v=1621376964540"
    },
    {
      name: "Shengli",
      src:
        "https://cdn.glitch.com/93d54425-a5c4-4040-ba55-c3d9e83f5fd2%2Fcolor-shengli.mp4?v=1621377675504"
    }]
};

// Lay-out
for (let i = 0; i < 12; i++) {
  // boxes
  let box = document.createElement("div");
  videoDiv.appendChild(box);
  box.className = "box";
  // videos or cam
  if (i < 11) {
    let vid = document.createElement("video");
    box.appendChild(vid);
    vid.className = "user-video";
    videos[i] = vid; // for future use

    vid.src = videoSrcs.idle[i].src;
    vid.play();
    vid.loop = true;

    // video's event listeners
    vid.addEventListener("click", function() {
      vid.src = videoSrcs.idle[i].src;
      vid.play();
      vid.loop = true;
      //
      speakerVideo.src = videoSrcs[subject][i].src;
      speakerView = true;
      speakerVideo.play();
      speakerVideo.loop = true;
      updateLayout();
    });
    vid.addEventListener("mouseover", function() {
      vid.src = videoSrcs[subject][i].src;
      vid.play();
    });
    vid.addEventListener("mouseout", function() {
      vid.src = videoSrcs.idle[i].src;
      vid.play();
      vid.loop = true;
    });
  } else {
    box.id = "special-box";
  }
}

let cam;

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.hide();
  background(50);
  noLoop();

  cam = createCapture(VIDEO);
  cam.parent("special-box");
  cam.size(200, 113);
}

function draw() {
  //
}

function keyPressed() {
  if (key == "s") {
    //speakerView = !speakerView;
  }
  if (key == "c") {
    //chatBox = !chatBox;
  }

  //updateLayout();
}

function updateLayout() {
  // speakerDiv
  if (speakerView) {
    speakerDiv.style.display = "flex";
    speakerDiv.style.width = speakerDivW + "%";
  } else {
    speakerDiv.style.display = "none";
    speakerDiv.style.width = "0%";
  }
  // chatDiv
  if (chatBox) {
    chatDiv.style.display = "block";
    chatDiv.style.width = chatDivW + "%";
  } else {
    chatDiv.style.display = "none";
    chatDiv.style.width = "0%";
  }
  // videoDiv
  if (speakerView && !chatBox) {
    videoDiv.style.width = 100 - speakerDivW + "%";
    videoDiv.style.left = speakerDivW + "%";
  } else if (!speakerView && chatBox) {
    videoDiv.style.width = 100 - chatDivW + "%";
    videoDiv.style.left = "0%";
  } else if (speakerView && chatBox) {
    videoDiv.style.width = 100 - speakerDivW - chatDivW + "%";
    videoDiv.style.left = speakerDivW + "%";
  } else {
    videoDiv.style.width = "100%";
    videoDiv.style.left = "0%";
  }
}

/* global p5 ml5 alpha blue brightness color green hue lerpColor lightness red saturation background clear colorMode fill noFill noStroke stroke erase noErase 2D Primitives arc ellipse circle line point quad rect square triangle ellipseMode noSmooth rectMode smooth strokeCap strokeJoin strokeWeight bezier bezierDetail bezierPoint bezierTangent curve curveDetail curveTightness curvePoint curveTangent beginContour beginShape bezierVertex curveVertex endContour endShape quadraticVertex vertex plane box sphere cylinder cone ellipsoid torus loadModel model HALF_PI PI QUARTER_PI TAU TWO_PI DEGREES RADIANS print frameCount deltaTime focused cursor frameRate noCursor displayWidth displayHeight windowWidth windowHeight windowResized width height fullscreen pixelDensity displayDensity getURL getURLPath getURLParams remove disableFriendlyErrors noLoop loop isLooping push pop redraw select selectAll removeElements changed input createDiv createP createSpan createImg createA createSlider createButton createCheckbox createSelect createRadio createColorPicker createInput createFileInput createVideo createAudio VIDEO AUDIO createCapture createElement createCanvas resizeCanvas noCanvas createGraphics blendMode drawingContext setAttributes boolean string number applyMatrix resetMatrix rotate rotateX rotateY rotateZ scale shearX shearY translate storeItem getItem clearStorage removeItem createStringDict createNumberDict append arrayCopy concat reverse shorten shuffle sort splice subset float int str byte char unchar hex unhex join match matchAll nf nfc nfp nfs split splitTokens trim deviceOrientation accelerationX accelerationY accelerationZ pAccelerationX pAccelerationY pAccelerationZ rotationX rotationY rotationZ pRotationX pRotationY pRotationZ turnAxis setMoveThreshold setShakeThreshold deviceMoved deviceTurned deviceShaken keyIsPressed key keyCode keyPressed keyReleased keyTyped keyIsDown movedX movedY mouseX mouseY pmouseX pmouseY winMouseX winMouseY pwinMouseX pwinMouseY mouseButton mouseWheel mouseIsPressed requestPointerLock exitPointerLock touches createImage saveCanvas saveFrames image tint noTint imageMode pixels blend copy filter THRESHOLD GRAY OPAQUE INVERT POSTERIZE BLUR ERODE DILATE get loadPixels set updatePixels loadImage loadJSON loadStrings loadTable loadXML loadBytes httpGet httpPost httpDo Output createWriter save saveJSON saveStrings saveTable day hour minute millis month second year abs ceil constrain dist exp floor lerp log mag map max min norm pow round sq sqrt fract createVector noise noiseDetail noiseSeed randomSeed random randomGaussian acos asin atan atan2 cos sin tan degrees radians angleMode textAlign textLeading textSize textStyle textWidth textAscent textDescent loadFont text textFont orbitControl debugMode noDebugMode ambientLight specularColor directionalLight pointLight lights lightFalloff spotLight noLights loadShader createShader shader resetShader normalMaterial texture textureMode textureWrap ambientMaterial emissiveMaterial specularMaterial shininess camera perspective ortho frustum createCamera setCamera CENTER CORNER CORNERS POINTS WEBGL RGB ARGB HSB LINES CLOSE BACKSPACE DELETE ENTER RETURN TAB ESCAPE SHIFT CONTROL OPTION ALT UP_ARROW DOWN_ARROW LEFT_ARROW RIGHT_ARROW sampleRate freqToMidi midiToFreq soundFormats getAudioContext userStartAudio loadSound createConvolver setBPM saveSound getMasterVolume masterVolume soundOut chain drywet biquadFilter process freq res gain toggle setType pan phase triggerAttack triggerRelease setADSR attack decay sustain release dispose notes polyvalue AudioVoice noteADSR noteAttack noteRelease isLoaded playMode set isPlaying isPaused setVolume getPan rate duration currentTime jump channels frames getPeaks reverseBuffer onended setPath setBuffer processPeaks addCue removeCue clearCues getBlob getLevel toggleNormalize waveform analyze getEnergy getCentroid linAverages logAverages getOctaveBands fade attackTime attackLevel decayTime decayLevel releaseTime releaseLevel setRange setExp width output stream mediaStream currentSource enabled amplitude getSources setSource bands panner positionX positionY positionZ orient orientX orientY orientZ setFalloff maxDist rollof leftDelay rightDelay delayTime feedback convolverNode impulses addImpulse resetImpulse toggleImpulse sequence getBPM addPhrase removePhrase getPhrase replaceSequence onStep musicalTimeMode maxIterations synced bpm timeSignature interval iterations compressor knee ratio threshold reduction record isDetected update onPeak WaveShaperNode getAmount getOversample amp setInput connect disconnect play pause stop start add mult */
