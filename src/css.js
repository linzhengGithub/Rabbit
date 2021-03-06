const string = `.container{
  width: 384px;
  height: 384px;
  background: aquamarine;
  border: 16px solid #b2ffe5;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  margin-left: -192px;
  overflow: hidden;
  z-index: 1;
}
.bodily {
  background: #F2F2F2;
  width: 224px;
  height: 192px;
  position: relative;
  top: 192px;
  margin: 0 auto;
  border-radius: 104px 104px 80px 80px;
  z-index: 3;
}
.eye{
  width: 48px;
  height: 48px;
  background: #2E2E2E;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  margin-left: -24px;
  top:64px;
  z-index: 4;
}
.eye.right{
  transform: translateX(40px);
}
.eye.left{
  transform: translateX(-40px);
}
.eye::before{
  content: '';
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  position: absolute;
  top: 3.5px;
  left: 3.5px;
}
.mouth{
  width: 42px;
  height: 32px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  margin-left: -21px;
  top: 120px;
  z-index: 5;
}
.mouth.right{
  transform: translateX(14px);
}
.mouth.left{
  transform: translateX(-14px);
}
.nose{
  width: 32px;
  height: 16px;
  border-radius: 50% 50% 35% 35%;
  background: pink;
  margin: 0 auto;
  position: relative;
  top: 114px;
  z-index: 6;
}
.tongue{
  width: 36px;
  height: 28px;
  border-radius: 50%;
  background: pink;
  margin: 0 auto;
  position: relative;
  top: 98px;
  z-index: 4;
  transition: height 500ms ease-in-out;
}
.belly{
  width: 112px;
  height: 80px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  margin-left: -56px;
  top: 178px;
}
.ear{
  width: 64px;
  height: 224px;
  background: #F2F2F2;
  border-radius: 50%;
  position: absolute;
  top: 32px;
  left: 50%;
  margin-left: -32px;
}
.ear.left{
  transform: translateX(56px) rotate(10deg);
  transform-origin: center bottom;
  animation: waveLeft 2s infinite linear;
}
.ear.right{
  transform: translateX(-56px) rotate(-10deg);
  transform-origin: center bottom;
  animation: waveRight 2s infinite linear;
}
.inner-ear-left{
  width: 40px;
  height: 160px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: 32px;
  left: 50%;
  margin-left: -20px;
}
.inner-ear-right{
  width: 40px;
  height: 160px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: 32px;
  left: 50%;
  margin-left: -20px;
}
@keyframes waveRight {
  0%{
    transform: translateX(-56px) rotate(-10deg);
  }
  50%{
    transform: translateX(-56px) rotate(8deg);
  }
  100%{
    transform: translateX(-56px) rotate(-10deg);
  }
}
@keyframes waveLeft {
  0%{
    transform: translateX(56px) rotate(10deg);
  }
  50%{
    transform: translateX(56px) rotate(-8deg);
  }
  100%{
    transform: translateX(56px) rotate(10deg);
  }
}

.container:hover .tongue{
  height: 48px;
}
`
export default string