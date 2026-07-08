import { FC } from "react";
import { LegalLayout, LegalSection } from "./LegalLayout";

const SECTIONS: LegalSection[] = [
  {
    id: "acceptance",
    heading: "Acceptance of terms",
    blocks: [
      { type: "p", text: "By accessing our website or engaging Fossilite for services, you agree to these Terms of Service. If you are entering into these terms on behalf of a company, you represent that you have the authority to bind that company. If you do not agree, please do not use our services." },
    ],
  },
  {
    id: "services",
    heading: "Our services",
    blocks: [
      { type: "p", text: "Fossilite designs and builds production-grade AI systems — including retrieval pipelines, autonomous agents and workflow automation. The specific scope, deliverables, timeline and fees for any engagement are defined in a separate written agreement or statement of work, which takes precedence over these terms where they conflict." },
    ],
  },
  {
    id: "accounts",
    heading: "Accounts and access",
    blocks: [
      { type: "p", text: "If we provide you with access to an account or system, you are responsible for keeping your credentials secure and for all activity that occurs under your access. Notify us promptly if you suspect any unauthorised use." },
    ],
  },
  {
    id: "ownership",
    heading: "Ownership of deliverables",
    blocks: [
      { type: "p", text: "We believe you should own what you pay for. Upon full payment for an engagement:" },
      {
        type: "list",
        items: [
          "You own the code, data and models we deliver as part of that engagement.",
          "We retain rights to our pre-existing tools, frameworks and general know-how used to build them.",
          "We hand over everything with documentation — no lock-in and no hostage intellectual property.",
        ],
      },
    ],
  },
  {
    id: "acceptable-use",
    heading: "Acceptable use",
    blocks: [
      { type: "p", text: "You agree not to use our services or any system we build to:" },
      {
        type: "list",
        items: [
          "Break the law or infringe the rights of others.",
          "Attempt to gain unauthorised access to systems or data.",
          "Distribute malware, or interfere with the integrity or performance of our services.",
        ],
      },
    ],
  },
  {
    id: "fees",
    heading: "Fees and payment",
    blocks: [
      { type: "p", text: "Fees are set out in your engagement agreement. Unless stated otherwise, invoices are due within the period specified on the invoice. Third-party costs — such as model or infrastructure usage — are passed through transparently at cost. Late payments may result in suspension of work until the balance is settled." },
    ],
  },
  {
    id: "confidentiality",
    heading: "Confidentiality",
    blocks: [
      { type: "p", text: "Each party may receive confidential information from the other during an engagement. Both parties agree to protect that information, use it only to fulfil the engagement, and not disclose it to third parties without permission — except where disclosure is required by law." },
    ],
  },
  {
    id: "warranties",
    heading: "Warranties and disclaimers",
    blocks: [
      { type: "p", text: "We deliver our work with professional care and skill. Except as expressly stated in your engagement agreement, our services and website are provided “as is” without warranties of any kind, whether express or implied, including fitness for a particular purpose. AI systems produce probabilistic output; we build guardrails and human review into what we ship, but we do not warrant that any system will be error-free." },
    ],
  },
  {
    id: "liability",
    heading: "Limitation of liability",
    blocks: [
      { type: "p", text: "To the fullest extent permitted by law, Fossilite will not be liable for any indirect, incidental or consequential damages, or for lost profits or data. Our total liability arising out of or relating to an engagement will not exceed the fees you paid us for that engagement in the twelve months preceding the claim." },
    ],
  },
  {
    id: "termination",
    heading: "Termination",
    blocks: [
      { type: "p", text: "Either party may terminate an engagement as set out in the relevant agreement. On termination, you remain responsible for fees incurred up to the termination date, and we will hand over completed deliverables for which payment has been made." },
    ],
  },
  {
    id: "governing-law",
    heading: "Governing law",
    blocks: [
      { type: "p", text: "These terms are governed by the laws specified in your engagement agreement, or otherwise by the laws applicable at Fossilite's principal place of business. Any disputes will be resolved in the courts of that jurisdiction." },
    ],
  },
  {
    id: "changes",
    heading: "Changes to these terms",
    blocks: [
      { type: "p", text: "We may update these terms from time to time. When we make material changes, we'll update the date at the top of this page. Your continued use of our services after changes take effect constitutes acceptance of the revised terms." },
    ],
  },
];

export const Terms: FC = () => (
  <LegalLayout
    eyebrow="Terms of Service"
    title="Clear terms,"
    titleAccent="fairly set."
    subtitle="The agreement that governs your use of Fossilite's website and services — in plain language, without the maze."
    updated="July 2026"
    intro="These terms set out the ground rules for working with Fossilite and using our website. We've kept them straightforward on purpose. For any specific engagement, the statement of work we sign together adds the detail — and takes precedence where the two ever differ."
    sections={SECTIONS}
  />
);

export default Terms;
