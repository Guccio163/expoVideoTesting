import { useVideoPlayer, VideoView } from "expo-video";
import { useRef, useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function HomeScreen() {
  const videoRef = useRef<VideoView | null>(null);
  const [controlsEnabled, setControlsEnabled] = useState(false);
  const [muted, setMuted] = useState(false);
  const sourceURL1 =
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4";
  const sourceURL2 =
    "https://d2k5nsl2zxldvw.cloudfront.net/videos/intro-1280.mp4";
  const sourceURL3 =
    "https://d2k5nsl2zxldvw.cloudfront.net/videos/intro-1280.mp4?encryptedAuthToken=OKboD0LZLFtqyVIOEcYxBdkZhEr9vErLt3p8O3%2B3wy0NKPwe%2FqGV4mYjQsbYIvdLrqPXudeDL5eFiFdtRSkWjj199UzNI4Z5JVWILvOFmrPY2DCuJBnNYSisMSjVdkEQ1CmnAHDavB%2Bu92fl3rS5gH1kGPSAhb4wcT5WVRWkcl9XVEBOxrPnfVpjGtu8iv0IDFwrIbubDQ0EoLSBLSiTd3fDbo1rzX8CiOM6CF9mDTu0bbYSXsTeHPB0GDeY7gkiaHtxa2Wvr7Ycd8cOG2sL3fox0Hh0LnKrae9mu3IuRR%2BLWPwhswu6F%2FdraEZLjr7lCtV5juS5BJRsyGFCy3VYuv9Glt2pyt19lxbYSQMJPJ7J6BQpJ4gIJ7ealyMyQ8in1PSJxTbXryxicS9W8fDKacTrn%2F5SX%2F%2BHf1ySjgfxpTx97JUoec%2FcmwEbIZ1ZG4uMIDAlw24khQL05FOMqrxQYeujIAuADGrlKS%2FOADXYtayLZ%2BvaJXREh3CHTrq1WWZuwwb%2FVfDsifdZTnlXG7t2x55oAxSBVcZPt7oXMoWsMWOkUZ%2B1Y1m7saHhNcHPszRLkc2or%2B11XSN1fL%2FQBxxyZdHQiZE7yS7J7MmKY3KObbOPvADBVMIjc6KruLUmZRwzb29hFMW0OMNb9viWaL8bXc7hsoihY06yrgJ9D9KCe9z7pw%2FoaLrS68zaqC5pRdD8gAozzadJCEw3mcOlxFi3OL1QEJDnFQbt8CHnHQl6Ukf7cmgBlM4t2i6NfNuJhhIvDo4WziaitC64mGm6u6r18oiNyyEpKpnVsPGRtZ8US5ySlKDtUVdZNCcuHekHgr%2B5EXOFOF48%2Blae%2Bg%2FM1jLRuIoL6gsmrDnLVIMQAn8Sl65Zu3KvZ6xw4HJ4UUOXpcD3piIM9FUXNWXtVL9FVzrZtz7PadnjPy1WkoYuWWiQkHgqyVCeIQg%2BbGKxznROErkww%2Fj%2BzHi3TqeNmvPVPabwKeJUF2HIUhoaYi0bjSJCwNq%2B1HjVUa7W%2BXxEsghNdCPr";
  const sourceURL4 = "https://d3snkl3dd5j6bx.cloudfront.net/xd.mp4";

  const videoPlayer = useVideoPlayer(sourceURL4, (player) => {
    player.play();
  });

  console.log(`zmienione ${controlsEnabled}`);

  return (
    <View
      style={{
        alignItems: "center",
        width: 400,
        maxWidth: 400,
        height: 600,
      }}
    >
      <VideoView
        allowsFullscreen
        style={{ height: 300, width: 300 }}
        player={videoPlayer}
        nativeControls={controlsEnabled}
        ref={videoRef}
        // playsInline
        // crossOrigin="anonymous"
        onFullscreenEnter={() => {
          console.log("onFullscreenEnter");
          setControlsEnabled(true);
          // setTimeout(() => {
          //   setControlsEnabled(true);
          // }, 2000);
        }}
        onFullscreenExit={() => setControlsEnabled(false)}
      />
      <Pressable
        onPressIn={() => {
          setControlsEnabled(true);
          // videoRef?.current?.enterFullscreen();
          setTimeout(() => {
            videoRef?.current?.enterFullscreen();
          }, 100);
        }}
        style={{ backgroundColor: "magenta", width: 50, height: 50 }}
      >
        <Text>Fullscreen</Text>
      </Pressable>
      <Pressable
        onPressIn={() => {
          videoPlayer.play();
        }}
        style={{ backgroundColor: "red", width: 50, height: 50 }}
      >
        <Text>Play</Text>
      </Pressable>
      {/* <Pressable
        onPressIn={() => {
          setMuted((is) => !is);
          videoPlayer.muted = !videoPlayer.muted;
        }}
        style={{ backgroundColor: "lightgreen", width: 100, height: 50 }}
      >
        <Text>Muted: {JSON.stringify(muted)}</Text>
      </Pressable> */}
      <Pressable
        onPressIn={() => {
          setControlsEnabled((is) => !is);
        }}
        style={{ backgroundColor: "yellow", width: 100, height: 50 }}
      >
        <Text>Controls Enabled: {JSON.stringify(controlsEnabled)}</Text>
      </Pressable>
    </View>
  );
}
