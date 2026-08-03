import { FC } from "react";
import { Box } from "@mui/material";
import {
  Hero,
  LogoStrip,
  FirstImageSection,
  FirstGeneralSection,
  SecondImageSection,
  SecondGeneralSection,
  ChatBoxSection,
  TestimonialsSection,
  IntegrationsSection,
  FaqSection,
  CommentToAnimationSection,
  ArchaeologyGraphsSection,
  GradientDescentSection,
  ConfidenceFieldSection,
  FieldworkSection,
} from "./subComponents";
import { Layout } from "../../layout";

export const Home: FC = () => {
  return (
    <Layout>
      <Box sx={{ backgroundColor: "background.default" }}>
        <Hero />
        <LogoStrip />
        <ChatBoxSection />
        <FirstImageSection />
        <ArchaeologyGraphsSection />
        <FirstGeneralSection />
        <FieldworkSection />
        <GradientDescentSection />
        <SecondImageSection />
        <IntegrationsSection />
        <ConfidenceFieldSection />
        <CommentToAnimationSection />
        <TestimonialsSection />
        <FaqSection />
        <SecondGeneralSection />
      </Box>
    </Layout>
  );
};