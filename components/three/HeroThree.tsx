import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Merc from "../Merc";


const HeroThree = () => {
    // resize canvas to fill browser window dynamically
    // useEffect(() => {
    //     window.addEventListener("resize", () => {
    //         const canvas = document.querySelector("#hero-three");
    //         canvas.style.width = "100%";
    //         canvas.style.height = "100%";
    //         canvas.style.top = "0";
    //         canvas.style.left = "0";
    //     });
    // }, []);



    return (
        <Canvas id="hero-three" className="canvas " camera={[10, 10, 20]}>
            <OrbitControls enableZoom={true} />
            <ambientLight intensity={2} />
            <directionalLight position={[-7, 5, 6]} intensity={1} />
            <Suspense fallback={null}>
                <Merc url="/merc.gltf" />
            </Suspense>
        </Canvas>
    )
}
export default HeroThree;