import Baground1 from "../Assest/Background/Bg.png";
import Lagu from "../Audio/v09044g40000cfiis6rc77ufudab3s20.mp3";
import { Howl, Howler } from "howler";

const audioPlayer = [{ sound: Lagu, label: "OPEN INVITATION" }];

const Modal = ({ setModalOn, setChoice }) => {
  const soundPlay = (src) => {
    handleOKClick();
    const sound = new Howl({
      src,
    });

    // Play the sound.
    sound.play();
  };

  const buttonSound = () => {
    return audioPlayer.map((object, index) => {
      return (
        <button
          className=" bg-[#BF9946] w-[325px] h-[68px] rounded-[30px]"
          key={index}
          onClick={() => soundPlay(object.sound)}
        >
          <h1 className=" text-[20px] font-poppins font-semibold text-white">
            {object.label}
          </h1>
        </button>
      );
    });
  };

  Howler.volume(1.0);

  const handleOKClick = () => {
    setChoice(true);
    setModalOn(false);
  };

  return (
    <div className="opacity-100 fixed inset-0 z-50">
      <img
        className=" w-full h-full bg-no-repeat bg-cover bg-left bg-fixed"
        src={Baground1}
        alt="/"
      />

      <div className="absolute w-full bottom-[45px]">
        <div className="text-center">
          <h1 className=" text-[14px] font-poppins font-semibold text-[#FFFFFF]">
            FILKOM 2019 Are Invited To
          </h1>
          <h1 className=" text-[40px] font-bonheurRoyale text-[#FFFFFF]">
            Senios Night
          </h1>
        </div>

        <div className=" text-center mt-[20px]">
          <h1 className=" text-[14px] font-poppins font-semibold text-[#FFFFFF]">
            Kepada Yth: Bpk/Ibu/Saudara/I
          </h1>
        </div>

        <div className=" text-center mt-[16px]">{buttonSound()}</div>
      </div>
    </div>
  );
};

export default Modal;
