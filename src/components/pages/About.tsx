import { AnimatedPageWrapper } from "../animation/AnimatedPageWrapper";
import { AnimatedSection } from "../animation/AnimatedSection";
import { ImageCarousel } from "../ImageCarousel";

export function About() {
    
  const carouselImages = [
    { src: "./carousel/image1.png", alt: "Image 1" },
    { src: "./carousel/image2.png", alt: "Image 2" },
    { src: "./carousel/image3.png", alt: "Image 3" },
    { src: "./carousel/image4.png", alt: "Image 4" },
    { src: "./carousel/image5.png", alt: "Image 5" },
    { src: "./carousel/image6.png", alt: "Image 6" },
    { src: "./carousel/image7.png", alt: "Image 7" },
    { src: "./carousel/image8.png", alt: "Image 8" },
    { src: "./carousel/image9.png", alt: "Image 9" },
    { src: "./carousel/image10.png", alt: "Image 10" },
  ];

  return (
    <AnimatedPageWrapper>
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Page Header */}
        <AnimatedSection
          delay={0}
          fromOpacity={0.8}
          className="mb-8"
        >
          <h1 className="text-foreground mb-8">About Me</h1>
        </AnimatedSection>
        
        <div className="space-y-8">
          {/* Background Section */}
          <AnimatedSection
            delay={100}
            fromOpacity={0.9}
            className="glass-panel p-8"
          >
            <h2 className="text-primary mb-4">Background</h2>
            <p className="mb-4">
              I'm a 3rd year Computer Science Game Design major with a specialization in gameplay programming with additional practice in UX/UI design, level design, and narrative structures. My passion lies in creating 
              engaging game mechanics along with developing functional, reusable tools and polished player experiences which bring multifaceted game worlds to life.
            </p>
            <p>
              Creeping upon these pursuits, I spend time editing and managing content for Slug Gaming at UC Santa Cruz, competing in the collegiate Rainbow 6 Siege scene alongside UCSC Amber, and creating Life, Skincare, & Cosmetics content on Instagram and TikTok.
            </p>
          </AnimatedSection>

          {/* Carousel Section */}
          <AnimatedSection
            delay={50}
            fromOpacity={0.9}
            className="glass-panel overflow-hidden"
          >
            <div
              className="flex justify-center"
              style={{
                height: 500,
                minHeight: 800,
                maxHeight: 800,
              }}
            >
              <ImageCarousel 
                images={carouselImages}
                autoPlayInterval={3000}
                showControls={true}
              />
            </div>
          </AnimatedSection>

          {/* Skills Section */}
          <AnimatedSection
            delay={200}
            fromOpacity={0.9}
            className="glass-panel p-8"
          >
            <h2 className="text-primary mb-4">Skills</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="mb-3">Intermediate</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• C/C++ DSA </li>
                  <li>• JavaScript</li>
                  <li>• TypeScript</li>
                  <li>• HTML/CSS</li>
                  <li>• Python</li>
                  <li>• Prototyping (Figma, Adobe XD)</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3">Learning</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• C#</li>
                  <li>• C++ GD</li>
                  <li>• Unity & Unreal Engine</li>
                  <li>• Adobe After Effects</li>
                  <li>• Godot</li>
                  <li>• React.js</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* Philosophy Section */}
          <AnimatedSection
            delay={300}
            fromOpacity={0.9}
            className="glass-panel p-8"
          >
            <h2 className="text-primary mb-4">Philosophy</h2>
            <p>
              I believe great gameplay emerges from the intersection of accessible technical implementation and 
              user-centered design. Every system should serve the player experience, and every line of code 
              should contribute to making the game more engaging, intuitive, and fun.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </AnimatedPageWrapper>
  );
}