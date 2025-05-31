// src/content/esgSectionsData.ts
import type { Section } from '../components/InteractiveSection.astro';

export const esgSectionsData: Section[] = [
  {
    id: 'environmental',
    buttonText: 'Environmental',
    icon: 'lucide:leaf', // Using astro-icon format
    activeBgColor: 'bg-brand-green',
    activeTextColor: 'text-white',
    inactiveIconColorClass: 'text-brand-green',
    inactiveTextColorClass: 'text-brand-green',
    contentTitle: "Environmental: Shaping Sustainable Spaces",
    contentDetails: [
      { type: 'paragraph', text: "Environmental criteria assess how a company performs as a steward of nature and addresses its direct and indirect impacts on the planet. For real estate, this involves a comprehensive evaluation of energy use, water consumption, waste generation, pollution, natural resource depletion, biodiversity impact, and the treatment of ecosystems throughout the lifecycle of buildings and developments." },
      { type: 'paragraph', text: "It also evaluates environmental risks a company might face—such as those linked to climate change vulnerability, resource scarcity, and regulatory shifts—and critically, how it proactively manages and mitigates these risks to ensure long-term resilience and value." },
      { type: 'subheading', text: 'The Real Estate Nexus' },
      { type: 'paragraph', text: "The built environment has an undeniable and intricate relationship with the planet. Buildings are significant consumers of energy (often accounting for around 40% of global energy consumption) and natural resources, and are major contributors to global carbon emissions, both operational and embodied. Sustainable building practices, the adoption of renewable energy, thoughtful site selection, climate resilience strategies, and a commitment to enhancing local biodiversity are therefore not just ethical considerations but fundamental to the sector's future viability and its role in a low-carbon economy." },
      { type: 'paragraph', text: "Real estate investors and developers face increasing pressure from regulators, tenants, and communities to decarbonize assets, minimize environmental footprints, and actively contribute to ecological restoration. Proactive environmental stewardship is thus key to mitigating transition risks, unlocking green financing opportunities, and enhancing asset appeal and market value." },
      { type: 'subheading', text: 'Key Impact Areas & Opportunities' },
      { type: 'list', items: [ "Net-Zero Carbon Strategies: Developing and implementing pathways to achieve net-zero operational and embodied carbon across portfolios, incorporating energy efficiency, electrification, and renewable energy procurement.", "Energy Efficiency & Management: Investing in high-performance building envelopes, smart building technologies (BMS), LED lighting, and efficient HVAC systems to significantly reduce operational energy demand.", "Water Stewardship: Implementing water-efficient fixtures, rainwater harvesting, greywater recycling, and sustainable landscaping to minimize water consumption and stress on local resources.", "Sustainable & Circular Materials: Prioritizing the use of low-carbon, recycled, renewable, and locally sourced materials; designing for disassembly and material reuse to embrace circular economy principles.", "Waste Reduction & Management: Implementing comprehensive waste management plans focused on reduction, reuse, and recycling during construction, operation, and demolition phases.", "Climate Resilience & Adaptation: Assessing and mitigating physical climate risks (e.g., flooding, extreme heat) through resilient design, site selection, and adaptation measures.", "Biodiversity & Ecosystem Enhancement: Protecting and enhancing biodiversity on and around development sites through green infrastructure, habitat creation, and sensitive land management." ] },
      { type: 'statistic', text: "Fact: The building and construction sector accounts for 39% of global energy-related CO2 emissions when upstream power generation is included. (Source: Global Alliance for Buildings and Construction, 2019 Global Status Report for Buildings and Construction)" },
    ]
  },
  {
    id: 'social',
    buttonText: 'Social',
    icon: 'lucide:users', // Using astro-icon format
    activeBgColor: 'bg-brand-blue',
    activeTextColor: 'text-white',
    inactiveIconColorClass: 'text-brand-blue',
    inactiveTextColorClass: 'text-brand-blue',
    contentTitle: "Social: Fostering Thriving Communities & Well-being",
    contentDetails: [
      { type: 'paragraph', text: "Social criteria examine how a company manages relationships with its employees, suppliers, customers, and the communities where it operates. For real estate, this translates to creating spaces and developments that are safe, healthy, inclusive, and contribute positively to the well-being and social fabric of the areas they inhabit." },
      { type: 'paragraph', text: "This pillar also scrutinizes a company's commitment to fair labor standards, human rights, diversity, equity, and inclusion (DEI), data protection and privacy, and transparent community engagement and relations. It's about recognizing real estate's profound impact on people's lives and ensuring that impact is a net positive." },
      { type: 'subheading', text: 'The Real Estate Nexus' },
      { type: 'paragraph', text: "Real estate is intrinsically people-centric. Buildings are where people live, work, learn, heal, and connect. As such, the sector has a direct and significant influence on public health, well-being, social equity, and community cohesion. Ensuring that developments are not only physically safe and healthy for occupants but also promote mental well-being, foster inclusivity, provide equitable access, and engage meaningfully with local communities are critical social aspects." },
      { type: 'paragraph', text: "Furthermore, the real estate value chain, from construction to property management, involves vast workforces. Upholding fair labor practices, ensuring ethical sourcing, and promoting diversity within the industry itself are essential components of social responsibility that build trust, attract talent, and mitigate reputational risks." },
      { type: 'subheading', text: 'Key Impact Areas & Opportunities' },
      { type: 'list', items: [ "Health, Wellbeing & Safety by Design: Prioritizing occupant health through improved indoor air quality, access to natural light, biophilic design, active design features, and robust safety protocols.", "Community Engagement & Social Value Creation: Engaging authentically with local communities to understand needs, co-create solutions, and deliver developments that generate tangible social value (e.g., local employment, public amenities, support for local businesses).", "Diversity, Equity & Inclusion (DEI): Promoting DEI within the company's workforce and leadership, as well as ensuring developments are accessible and welcoming to diverse populations, including considerations for affordable housing.", "Ethical Supply Chains & Fair Labor Practices: Implementing due diligence to ensure fair labor conditions, living wages, and ethical treatment of workers throughout the construction and operational supply chains.", "Tenant & Occupier Satisfaction & Engagement: Fostering strong relationships with tenants and occupiers through responsive management, clear communication, and creating a positive user experience.", "Accessibility & Inclusive Design: Designing buildings and public realms that are accessible and usable by people of all ages and abilities, adhering to universal design principles.", "Data Privacy & Security: Implementing robust systems to protect the data privacy and security of tenants, employees, and other stakeholders." ] },
      { type: 'statistic', text: "Insight: Buildings designed with strong health and wellness features can command rental premiums of up to 7.7% and increase employee productivity and retention. (Source: Reference a relevant study, e.g., from WELL Building Institute, Harvard T.H. Chan School of Public Health, or JLL)" },
    ]
  },
  {
    id: 'governance',
    buttonText: 'Governance',
    icon: 'lucide:landmark', // Using astro-icon format (could also be 'lucide:scale')
    activeBgColor: 'bg-gray-600',
    activeTextColor: 'text-white',
    inactiveIconColorClass: 'text-gray-500',
    inactiveTextColorClass: 'text-gray-500',
    contentTitle: "Governance: Ensuring Ethical Foundations & Long-Term Value",
    contentDetails: [
      { type: 'paragraph', text: "Governance criteria deal with a company’s leadership, executive pay, audits, internal controls, shareholder rights, and overall ethical conduct. In the context of ESG, it refers to the structures, processes, and mechanisms that ensure a company is managed responsibly, transparently, and in a manner that considers the interests of all stakeholders." },
      { type: 'paragraph', text: "For real estate, this includes robust board oversight of ESG strategy and performance, transparent disclosure of ESG risks and opportunities, clear accountability for meeting targets, and ethical decision-making processes that prevent bribery, corruption, and conflicts of interest." },
      { type: 'subheading', text: 'The Real Estate Nexus' },
      { type: 'paragraph', text: "Effective corporate governance is the linchpin of a successful and credible ESG strategy in the real estate sector. Given the long-term nature of property investments and developments, and the significant capital involved, transparent and ethical governance is crucial for building investor confidence, managing complex risks (including climate, social, and regulatory risks), and ensuring sustainable value creation. It dictates how ESG considerations are integrated into investment decisions, asset management, and corporate strategy." },
      { type: 'paragraph', text: "Strong governance structures provide the framework for setting ambitious ESG goals, tracking progress, ensuring accountability from the board level down, and engaging transparently with investors, lenders, tenants, and regulators. It ensures that companies are not just 'talking the talk' but are genuinely embedding ESG into their operational DNA." },
      { type: 'subheading', text: 'Key Impact Areas & Opportunities' },
      { type: 'list', items: [ "Board-Level ESG Oversight & Accountability: Establishing clear board-level responsibility for ESG, integrating ESG into board mandates, and linking executive compensation to ESG performance.", "Transparent ESG Reporting & Disclosure: Adopting leading reporting frameworks (e.g., TCFD, SASB, GRESB, GRI) to provide consistent, comparable, and reliable ESG data to stakeholders.", "Integrated ESG Risk Management: Incorporating ESG factors into enterprise risk management (ERM) frameworks to identify, assess, and mitigate climate, environmental, social, and governance risks.", "Ethical Business Practices & Anti-Corruption: Implementing robust codes of conduct, anti-bribery and anti-corruption policies, and whistle-blower protection mechanisms.", "Stakeholder Engagement & Rights: Establishing formal mechanisms for engaging with diverse stakeholder groups and ensuring their rights and perspectives are considered in decision-making.", "Supply Chain Governance: Extending ESG expectations and due diligence processes to key suppliers and partners to ensure responsible practices throughout the value chain.", "Lobbying & Political Contributions Transparency: Ensuring transparency and ethical conduct in all lobbying activities and political contributions related to ESG and real estate matters." ] },
      { type: 'statistic', text: "Finding: Companies in the top quartile for ESG performance (often correlated with strong governance) have demonstrated higher financial performance and resilience during economic downturns. (Source: Reference relevant meta-analyses, e.g., from NYU Stern, McKinsey, or similar reputable sources)" },
    ]
  }
];
