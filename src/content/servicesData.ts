// src/content/servicesData.ts
import type { Section } from '../components/InteractiveSection.astro';

export const servicesData: Section[] = [
  {
    id: 'core-values',
    buttonText: 'Company Core Values',
    icon: 'lucide:gem', // Using astro-icon format
    activeBgColor: 'bg-brand-green', // Changed to green
    activeTextColor: 'text-white',
    inactiveIconColorClass: 'text-brand-green', // Changed to green
    inactiveTextColorClass: 'text-brand-green', // Changed to green
    contentTitle: 'Company Core Values',
    contentDetails: [
      {
        type: 'paragraph',
        text: 'At Impactful Places, we believe that a strong ethical foundation is the bedrock of sustainable success. We partner with real estate organizations to define and embed core values that not only drive responsible business practices but also foster a culture of integrity and long-term positive impact.'
      },
      {
        type: 'paragraph',
        text: 'Our approach ensures that your values are not just statements, but living principles that guide every decision, from investment strategies to daily operations. This deep integration builds resilience and authenticity.'
      },
      {
        type: 'paragraph',
        text: 'We work collaboratively to translate abstract values into actionable behaviors, ensuring alignment across all levels of your organization. This creates a cohesive and purpose-driven environment.'
      },
      {
        type: 'paragraph',
        text: 'By clearly articulating and consistently living your values, you enhance your brand reputation, attract and retain top talent, and build unwavering trust with all stakeholders, from investors to communities.'
      },
      { type: 'subheading', text: 'Key Activities' },
      { type: 'list', items: ['Value Definition Workshops: Facilitating interactive sessions to identify and articulate core organizational values.', 'Integration into Strategy: Developing frameworks to embed values into business strategy, decision-making, and operational processes.', 'Culture Alignment: Designing initiatives to align organizational culture with defined values, promoting ethical conduct and responsible practices.'] },
      { type: 'subheading', text: 'Client Benefits' },
      { type: 'list', items: ['Stronger Brand Identity: A clear, authentic brand image that resonates with stakeholders.', 'Improved Employee Engagement: A purpose-driven culture that attracts and retains talent.', 'Enhanced Stakeholder Trust: Building credibility and long-term relationships with investors, partners, and communities.'] }
    ]
  },
  {
    id: 'esg-strategy',
    buttonText: 'ESG Impact Strategy',
    icon: 'lucide:trending-up', // Using astro-icon format
    activeBgColor: 'bg-brand-green', // Changed to green
    activeTextColor: 'text-white',
    inactiveIconColorClass: 'text-brand-green', // Changed to green
    inactiveTextColorClass: 'text-brand-green', // Changed to green
    contentTitle: 'ESG Impact Strategy',
    contentDetails: [
      {
        type: 'paragraph',
        text: 'In today’s rapidly evolving real estate landscape, a robust ESG strategy is no longer optional—it’s a necessity for long-term value creation. We specialize in developing tailored ESG impact strategies that seamlessly integrate with your core business objectives, moving beyond mere compliance to deliver measurable positive change.'
      },
      {
        type: 'paragraph',
        text: 'Our strategic frameworks are designed to identify material ESG risks and opportunities specific to your portfolio, ensuring that your efforts are focused where they can have the greatest impact and generate the most value.'
      },
      {
        type: 'paragraph',
        text: 'We guide you through the process of setting ambitious yet achievable ESG goals, developing clear KPIs, and crafting actionable roadmaps for implementation. This ensures accountability and tangible progress.'
      },
      {
        type: 'paragraph',
        text: 'By embedding ESG into your strategic DNA, you not only mitigate risks and enhance resilience but also unlock new financing opportunities, improve asset performance, and significantly boost your reputation among investors, tenants, and regulators.'
      },
      { type: 'subheading', text: 'Key Activities' },
      { type: 'list', items: ['Materiality Assessments: Identifying the most significant ESG issues for your business and stakeholders.', 'Target Setting & KPI Development: Establishing clear, measurable, and time-bound ESG goals and key performance indicators.', 'Implementation Roadmap Creation: Developing practical, phased plans for integrating ESG strategies across operations and investments.'] },
      { type: 'subheading', text: 'Client Benefits' },
      { type: 'list', items: ['Clear Direction: A well-defined ESG strategy aligned with business objectives.', 'Risk Mitigation: Proactive identification and management of environmental, social, and governance risks.', 'Enhanced Reputation: Improved standing with investors, tenants, and regulatory bodies.'] }
    ]
  },
  {
    id: 'social-impact-training',
    buttonText: 'Social Impact Training',
    icon: 'lucide:graduation-cap', // Using astro-icon format
    activeBgColor: 'bg-brand-green', // Changed to green
    activeTextColor: 'text-white',
    inactiveIconColorClass: 'text-brand-green', // Changed to green
    inactiveTextColorClass: 'text-brand-green', // Changed to green
    contentTitle: "'101' Social Impact Training",
    contentDetails: [
      {
        type: 'paragraph',
        text: 'Understanding and delivering social impact in real estate is becoming increasingly vital. Our "101" social impact training programs are specifically designed for real estate professionals, providing foundational knowledge, practical skills, and the confidence needed to integrate social value into projects and operations.'
      },
      {
        type: 'paragraph',
        text: 'We demystify complex social issues and translate them into actionable insights relevant to the built environment. Our sessions cover everything from community engagement best practices to fostering inclusive spaces.'
      },
      {
        type: 'paragraph',
        text: 'Through interactive workshops, real-world case studies, and engaging discussions, participants gain a comprehensive understanding of how real estate can contribute positively to people’s lives and local communities.'
      },
      {
        type: 'paragraph',
        text: 'Empower your teams to identify, measure, and report on social impact, enhancing your organization’s ability to create truly impactful places and meet evolving stakeholder expectations.'
      },
      { type: 'subheading', text: 'Key Activities' },
      { type: 'list', items: ['Customized Training Modules: Tailored content addressing your team’s specific needs and knowledge gaps.', 'Interactive Workshops: Engaging sessions designed for practical skill development and collaborative learning.', 'Case Study Analysis: Real-world examples to illustrate best practices and challenges in social impact.'] },
      { type: 'subheading', text: 'Client Benefits' },
      { type: 'list', items: ['Increased Team Knowledge: A foundational understanding of social impact principles in real estate.', 'Empowered Teams: Development of practical skills to identify and implement social value initiatives.', 'Consistent Understanding: Ensuring a unified approach to social responsibility across your organization.'] }
    ]
  },
  {
    id: 'communication',
    buttonText: 'Communication',
    icon: 'lucide:megaphone', // Using astro-icon format
    activeBgColor: 'bg-brand-green', // Changed to green
    activeTextColor: 'text-white',
    inactiveIconColorClass: 'text-brand-green', // Changed to green
    inactiveTextColorClass: 'text-brand-green', // Changed to green
    contentTitle: 'Communication, Marketing & PR',
    contentDetails: [
      {
        type: 'paragraph',
        text: 'In an era of heightened scrutiny, transparent and compelling communication of your ESG performance is paramount. We help real estate organizations craft powerful narratives and develop robust communication strategies that build brand reputation and foster deep trust with all stakeholders.'
      },
      {
        type: 'paragraph',
        text: 'Our expertise spans from developing clear, concise ESG reports to creating engaging marketing materials that highlight your positive impact. We ensure your message resonates with diverse audiences.'
      },
      {
        type: 'paragraph',
        text: 'We guide you in effectively articulating your sustainability commitments, progress, and achievements, transforming complex data into accessible and impactful stories.'
      },
      {
        type: 'paragraph',
        text: 'By strategically communicating your ESG journey, you not only meet disclosure requirements but also enhance investor confidence, attract environmentally and socially conscious tenants, and solidify your position as a responsible industry leader.'
      },
      { type: 'subheading', text: 'Key Activities' },
      { type: 'list', items: ['ESG Reporting Communications: Developing clear and compelling narratives for sustainability reports and disclosures.', 'Brand Narrative Development: Crafting authentic stories that highlight your commitment to responsible real estate.', 'Media Relations Strategy: Advising on effective engagement with media to promote positive ESG initiatives.'] },
      { type: 'subheading', text: 'Client Benefits' },
      { type: 'list', items: ['Strengthened Brand Image: A positive and credible reputation in the market.', 'Increased Stakeholder Trust: Building confidence with investors, tenants, and the public.', 'Effective Message Dissemination: Ensuring your ESG story reaches and resonates with target audiences.'] }
    ]
  },
  {
    id: 'stakeholder-engagement',
    buttonText: 'Stakeholder Engagement',
    icon: 'lucide:handshake', // Using astro-icon format
    activeBgColor: 'bg-brand-green', // Changed to green
    activeTextColor: 'text-white',
    inactiveIconColorClass: 'text-brand-green', // Changed to green
    inactiveTextColorClass: 'text-brand-green', // Changed to green
    contentTitle: 'Stakeholder Engagement',
    contentDetails: [
      {
        type: 'paragraph',
        text: 'Meaningful stakeholder engagement is fundamental to successful and sustainable real estate development. We facilitate authentic and productive dialogues with diverse stakeholder groups, ensuring that their perspectives are heard, understood, and integrated into your projects and strategies.'
      },
      {
        type: 'paragraph',
        text: 'Our process goes beyond mere consultation, aiming to build strong, collaborative relationships with investors, tenants, employees, local communities, and regulatory bodies.'
      },
      {
        type: 'paragraph',
        text: 'We help you identify key stakeholders, map their interests, and design engagement strategies that foster consensus, mitigate potential conflicts, and unlock shared value creation opportunities.'
      },
      {
        type: 'paragraph',
        text: 'By proactively engaging with those impacted by and invested in your projects, you enhance social license to operate, reduce project delays, and build a foundation of trust that supports long-term success and positive community outcomes.'
      },
      { type: 'subheading', text: 'Key Activities' },
      { type: 'list', items: ['Stakeholder Mapping & Analysis: Identifying key stakeholders and understanding their interests and influence.', 'Engagement Strategy Development: Designing tailored approaches for meaningful interaction with diverse groups.', 'Dialogue Facilitation: Leading productive discussions to build consensus and address concerns.'] },
      { type: 'subheading', text: 'Client Benefits' },
      { type: 'list', items: ['Improved Investor Confidence: Demonstrating responsible and inclusive business practices.', 'Enhanced Tenant Satisfaction: Creating spaces that truly meet the needs of occupiers.', 'Stronger Community Ties: Building positive relationships and social license to operate.'] }
    ]
  },
  {
    id: 'market-research',
    buttonText: 'Market Research',
    icon: 'lucide:search', // Using astro-icon format
    activeBgColor: 'bg-brand-green', // Changed to green
    activeTextColor: 'text-white',
    inactiveIconColorClass: 'text-brand-green', // Changed to green
    inactiveTextColorClass: 'text-brand-green', // Changed to green
    contentTitle: 'Market Research & Analysis',
    contentDetails: [
      {
        type: 'paragraph',
        text: 'Staying ahead in the dynamic real estate market requires deep insights into emerging trends and evolving stakeholder expectations. We conduct targeted market research and analysis to help you identify critical social and environmental risks, uncover untapped opportunities, and benchmark your performance against industry leaders.'
      },
      {
        type: 'paragraph',
        text: 'Our research goes beyond surface-level data, providing you with actionable intelligence on everything from green building demand to social impact investment trends.'
      },
      {
        type: 'paragraph',
        text: 'We leverage robust methodologies to analyze market dynamics, competitive landscapes, and regulatory shifts, ensuring your strategies are informed by the latest insights.'
      },
      {
        type: 'paragraph',
        text: 'By understanding the evolving ESG landscape, you can make more informed investment decisions, proactively manage risks, identify new avenues for growth, and position your organization for long-term success in a responsible market.'
      },
      { type: 'subheading', text: 'Key Activities' },
      { type: 'list', items: ['ESG Risk Assessments: Identifying and evaluating potential social and environmental risks to your projects and portfolio.', 'Opportunity Identification Studies: Uncovering new market opportunities driven by ESG trends and demands.', 'Competitive Benchmarking: Analyzing peer performance to identify best practices and areas for improvement.'] },
      { type: 'subheading', text: 'Client Benefits' },
      { type: 'list', items: ['Informed Decision-Making: Strategies backed by comprehensive market intelligence.', 'Proactive Risk Management: Anticipating and mitigating ESG-related challenges.', 'Identification of New Opportunities: Unlocking growth potential in sustainable and responsible real estate.'] }
    ]
  }
];
