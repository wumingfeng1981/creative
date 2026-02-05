import{r as d,j as e,M as A,R as W}from"./markdown-BgOqIGBX.js";import{r as E}from"./react-vendor-Cf4zUWJl.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const m of l.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&a(m)}).observe(document,{childList:!0,subtree:!0});function r(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(i){if(i.ep)return;i.ep=!0;const l=r(i);fetch(i.href,l)}})();var f={},b=E;f.createRoot=b.createRoot,f.hydrateRoot=b.hydrateRoot;var x={},D="@vercel/analytics",R="1.6.1",I=()=>{window.va||(window.va=function(...s){(window.vaq=window.vaq||[]).push(s)})};function w(){return typeof window<"u"}function v(){try{const t="production"}catch{}return"production"}function T(t="auto"){if(t==="auto"){window.vam=v();return}window.vam=t}function L(){return(w()?window.vam:v())||"production"}function y(){return L()==="development"}function $(t){return t.scriptSrc?t.scriptSrc:y()?"https://va.vercel-scripts.com/v1/script.debug.js":t.basePath?`${t.basePath}/insights/script.js`:"/_vercel/insights/script.js"}function U(t={debug:!0}){var s;if(!w())return;T(t.mode),I(),t.beforeSend&&((s=window.va)==null||s.call(window,"beforeSend",t.beforeSend));const r=$(t);if(document.head.querySelector(`script[src*="${r}"]`))return;const a=document.createElement("script");a.src=r,a.defer=!0,a.dataset.sdkn=D+(t.framework?`/${t.framework}`:""),a.dataset.sdkv=R,t.disableAutoTrack&&(a.dataset.disableAutoTrack="1"),t.endpoint?a.dataset.endpoint=t.endpoint:t.basePath&&(a.dataset.endpoint=`${t.basePath}/insights`),t.dsn&&(a.dataset.dsn=t.dsn),a.onerror=()=>{const i=y()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log(`[Vercel Web Analytics] Failed to load script from ${r}. ${i}`)},y()&&t.debug===!1&&(a.dataset.debug="false"),document.head.appendChild(a)}function G({route:t,path:s}){var r;(r=window.va)==null||r.call(window,"pageview",{route:t,path:s})}function M(){if(!(typeof process>"u"||typeof x>"u"))return x.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH}function O(t){return d.useEffect(()=>{var s;t.beforeSend&&((s=window.va)==null||s.call(window,"beforeSend",t.beforeSend))},[t.beforeSend]),d.useEffect(()=>{U({framework:t.framework||"react",basePath:t.basePath??M(),...t.route!==void 0&&{disableAutoTrack:!0},...t})},[]),d.useEffect(()=>{t.route&&t.path&&G({route:t.route,path:t.path})},[t.route,t.path]),null}function F(t){const s=new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),r=[];t.collectEmail&&r.push("- **Email Address**: Used for account authentication, communications, and service notifications"),t.collectName&&r.push("- **Name**: Used for personalized service and account identification"),t.collectPhone&&r.push("- **Phone Number**: Used for account security verification and customer support"),t.collectPayment&&r.push("- **Payment Information**: Processed through third-party payment processors (such as Stripe, PayPal). We do not directly store complete payment card information"),t.collectDeviceData&&r.push("- **Device Data**: Including IP address, browser type, operating system, cookies, and unique device identifiers"),t.collectLocation&&r.push("- **Location Data**: GPS coordinates or approximate location information based on IP address");const a=[];return t.useGoogleAnalytics&&a.push(`
### Google Analytics
We use Google Analytics to analyze website traffic and user behavior. Google Analytics uses cookies to collect anonymous information. You can opt out by installing the [Google Analytics Opt-out Browser Add-on](https://tools.google.com/dlpage/gaoptout).

More information: [Google Privacy Policy](https://policies.google.com/privacy)
`),t.useGoogleAdsense&&a.push(`
### Google AdSense
We use Google AdSense to display advertisements. Google and its partners may use cookies to serve ads based on your interests. You can manage your ad preferences by visiting [Google Ads Settings](https://www.google.com/settings/ads).

More information: [Google Advertising Privacy Policy](https://policies.google.com/technologies/ads)
`),t.useFacebookPixel&&a.push(`
### Facebook Pixel
We use Facebook Pixel to measure advertising effectiveness and optimize marketing campaigns. Facebook may collect data about your browsing behavior.

More information: [Facebook Data Policy](https://www.facebook.com/privacy/explanation)
`),t.useMailchimp&&a.push(`
### Mailchimp
We use Mailchimp to manage our email lists and send marketing emails. Your email address and related information will be stored on Mailchimp's servers.

More information: [Mailchimp Privacy Policy](https://mailchimp.com/legal/privacy/)
`),`# ${t.appName} Privacy Policy

**Effective Date:** ${s}

**Last Updated:** ${s}

---

## 1. Introduction

Welcome to ${t.appName} (hereinafter referred to as "we," "our," or "the Service"). ${t.companyName} is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and protect the information you provide when using our services.

By accessing or using ${t.appName} (website: ${t.websiteUrl}), you agree to the practices described in this Privacy Policy. If you do not agree with this policy, please do not use our services.

---

## 2. Information We Collect

We may collect the following types of personal information:

${r.length>0?r.join(`
`):"- We currently do not collect any personally identifiable information."}

### 2.1 Automatically Collected Information

When you visit our website, we may automatically collect certain information, including:
- Browser type and version
- Operating system
- Access time and date
- Referring URL
- Clickstream data

---

## 3. How We Use Your Information

We use the collected information for the following purposes:

- **Provide and Maintain Services**: Process your requests, provide customer support, and improve our services
- **Personalize Experience**: Customize content and features based on your preferences
- **Communications**: Send service updates, security alerts, and marketing information (you can opt out at any time)
- **Analytics and Improvement**: Analyze usage patterns to improve our products and services
- **Security and Fraud Prevention**: Detect, prevent, and resolve technical issues and fraudulent activities
- **Legal Compliance**: Comply with applicable laws, regulations, and legal processes

---

## 4. Cookies and Tracking Technologies

We use cookies and similar tracking technologies to track activity on our Service and store certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.

You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.

### Types of Cookies We Use:

- **Essential Cookies**: Necessary for the website to function properly
- **Functional Cookies**: Remember your preferences and choices
- **Analytics Cookies**: Help us understand how visitors use our website
- **Advertising Cookies**: Used to deliver relevant advertisements

---

## 5. Third-Party Service Providers

We may share your information with third-party service providers to help us operate our business, provide services, or perform services on our behalf. These third parties are obligated to protect your information and use it only for the purposes we specify.

${a.length>0?a.join(`
`):"We currently do not use any third-party service providers to process your personal data."}

---

## 6. Data Security

We take reasonable technical and organizational measures to protect your personal information from unauthorized access, use, disclosure, alteration, or destruction. These measures include:

- Data encryption (in transit and at rest)
- Secure servers and databases
- Regular security audits
- Employee training and access controls

However, please note that no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.

---

## 7. Data Retention

We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy. We will also retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.

When your personal information is no longer needed, we will securely delete or anonymize it.

---

## 8. Your Rights

Depending on applicable data protection laws, you may have the following rights:

- **Right to Access**: Request access to the personal information we hold about you
- **Right to Rectification**: Request correction of inaccurate or incomplete information
- **Right to Erasure**: Request deletion of your personal information ("right to be forgotten")
- **Right to Restrict Processing**: Request restriction of processing your personal information
- **Right to Data Portability**: Receive your data in a structured, commonly used, and machine-readable format
- **Right to Object**: Object to the processing of your personal information
- **Right to Withdraw Consent**: Where we rely on your consent, you may withdraw it at any time

To exercise these rights, please contact us at: ${t.contactEmail}

---

## 9. Children's Privacy

Our Service is not directed to children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us. If we discover that we have collected personal information from children under 13 without parental consent, we will take steps to remove that information from our servers.

---

## 10. International Data Transfers

Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ from those in your jurisdiction.

If you are located outside the United States and choose to provide information to us, please note that we transfer the data, including personal information, to the United States and process it there.

Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.

---

## 11. California Privacy Rights (CCPA)

If you are a California resident, you have the following rights:

- Know the categories of personal information we collect, use, disclose, or sell
- Request deletion of personal information we have collected
- Opt-out of the sale of personal information (if applicable)
- Not be discriminated against for exercising your privacy rights

To exercise these rights, please contact us at: ${t.contactEmail}

---

## 12. GDPR Compliance (EU Users)

If you are a resident of the European Economic Area (EEA), you have certain data protection rights. We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your personal information.

The legal basis for processing your personal information includes:

- **Consent**: You have consented to the processing of your personal information
- **Contract**: Processing is necessary for the performance of a contract with you
- **Legal Obligation**: Processing is necessary to comply with a legal obligation
- **Legitimate Interests**: Processing is necessary for our legitimate interests

---

## 13. Do Not Track Signals

We currently do not respond to "Do Not Track" (DNT) browser signals. However, you can disable cookies through your browser settings or use privacy browser extensions.

---

## 14. Third-Party Links

Our Service may contain links to third-party websites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.

We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.

---

## 15. Changes to This Privacy Policy

We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We will notify you via email and/or a prominent notice on our Service prior to the change becoming effective and update the "Last Updated" date at the top of this Privacy Policy.

You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.

---

## 16. Contact Us

If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:

**${t.companyName}**

- **Email**: ${t.contactEmail}
- **Website**: ${t.websiteUrl}

We will respond to your request within 30 days of receipt.

---

## 17. Data Protection Officer (DPO)

If you are located in the European Union, you have the right to lodge a complaint with a data protection authority about our collection and use of your personal information. For more information, please contact your local data protection authority.

---

## 18. Consent

By using our Service, you consent to our Privacy Policy and agree to its terms.

---

**Disclaimer:** This Privacy Policy template is for informational purposes only and does not constitute legal advice. We strongly recommend that you consult with a qualified legal professional to ensure that your Privacy Policy complies with all applicable laws and regulations.

---

*This document was generated by TinyWebKit Privacy Policy Generator.*
`}function q(){d.useEffect(()=>{try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(o){console.error("AdSense error:",o)}},[]);const[t,s]=d.useState(1),[r,a]=d.useState({appName:"",companyName:"",websiteUrl:"",contactEmail:"",collectEmail:!1,collectName:!1,collectPhone:!1,collectPayment:!1,collectDeviceData:!1,collectLocation:!1,useGoogleAdsense:!1,useGoogleAnalytics:!1,useFacebookPixel:!1,useMailchimp:!1}),[i,l]=d.useState(""),[m,P]=d.useState(!1),u=(o,c)=>{a(h=>({...h,[o]:c}))},k=()=>{t<3&&s(t+1)},N=()=>{t>1&&s(t-1)},j=()=>{const o=F(r);l(o),P(!0)},S=()=>{navigator.clipboard.writeText(i),alert("✅ Privacy policy copied to clipboard!")},C=()=>{const o=`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${r.appName} - Privacy Policy</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      color: #333;
    }
    h1 { color: #1a1a1a; border-bottom: 3px solid #ef4444; padding-bottom: 10px; }
    h2 { color: #2c2c2c; margin-top: 30px; }
    h3 { color: #444; }
    a { color: #ef4444; text-decoration: none; }
    a:hover { text-decoration: underline; }
    hr { border: none; border-top: 1px solid #ddd; margin: 30px 0; }
  </style>
</head>
<body>
${i.split(`
`).map(n=>n.startsWith("# ")?`<h1>${n.substring(2)}</h1>`:n.startsWith("## ")?`<h2>${n.substring(3)}</h2>`:n.startsWith("### ")?`<h3>${n.substring(4)}</h3>`:n.startsWith("**")&&n.endsWith("**")?`<p><strong>${n.substring(2,n.length-2)}</strong></p>`:n.startsWith("- ")?`<li>${n.substring(2)}</li>`:n==="---"?"<hr>":n.trim()===""?"":`<p>${n}</p>`).join(`
`)}
</body>
</html>
    `,c=new Blob([o],{type:"text/html"}),h=URL.createObjectURL(c),p=document.createElement("a");p.href=h,p.download=`${r.appName.replace(/\s+/g,"_")}_privacy_policy.html`,document.body.appendChild(p),p.click(),document.body.removeChild(p),URL.revokeObjectURL(h)},g=r.appName&&r.companyName&&r.websiteUrl&&r.contactEmail;return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",children:[e.jsx("header",{className:"bg-black/30 backdrop-blur-md border-b border-white/10",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-display font-bold text-white tracking-tight",children:"🔒 Privacy Policy Generator"}),e.jsx("p",{className:"text-purple-200 mt-1",children:"Create professional privacy policies for your SaaS app in minutes"})]}),e.jsx("div",{className:"text-sm text-purple-300 font-medium",children:"TinyWebKit"})]})})}),e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20",children:[e.jsx("div",{className:"flex items-center justify-between mb-4",children:[1,2,3].map(o=>e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${t>=o?"bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-purple-500/50":"bg-white/20 text-white/50"}`,children:o}),o<3&&e.jsx("div",{className:`w-16 h-1 mx-2 transition-all ${t>o?"bg-gradient-to-r from-pink-500 to-purple-500":"bg-white/20"}`})]},o))}),e.jsx("div",{className:"text-center",children:e.jsxs("p",{className:"text-white font-semibold text-lg",children:[t===1&&"Step 1: Company Information",t===2&&"Step 2: Data Collection",t===3&&"Step 3: Third-Party Services"]})})]}),e.jsxs("div",{className:"bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl",children:[t===1&&e.jsxs("div",{className:"space-y-6 animate-fadeIn",children:[e.jsx("h2",{className:"text-2xl font-display font-bold text-white mb-6",children:"Company Information"}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-purple-200 font-medium mb-2",children:"App Name *"}),e.jsx("input",{type:"text",value:r.appName,onChange:o=>u("appName",o.target.value),placeholder:"e.g., MyAwesomeApp",className:"w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-purple-200 font-medium mb-2",children:"Company Name (or Individual) *"}),e.jsx("input",{type:"text",value:r.companyName,onChange:o=>u("companyName",o.target.value),placeholder:"e.g., Acme Inc. or John Doe",className:"w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-purple-200 font-medium mb-2",children:"Website URL *"}),e.jsx("input",{type:"url",value:r.websiteUrl,onChange:o=>u("websiteUrl",o.target.value),placeholder:"https://example.com",className:"w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-purple-200 font-medium mb-2",children:"Contact Email *"}),e.jsx("input",{type:"email",value:r.contactEmail,onChange:o=>u("contactEmail",o.target.value),placeholder:"contact@example.com",className:"w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"})]})]}),t===2&&e.jsxs("div",{className:"space-y-6 animate-fadeIn",children:[e.jsx("h2",{className:"text-2xl font-display font-bold text-white mb-6",children:"What Data Do You Collect?"}),[{key:"collectEmail",label:"Email Address",desc:"For newsletter/authentication"},{key:"collectName",label:"First/Last Name",desc:"User identification"},{key:"collectPhone",label:"Phone Number",desc:"For verification or support"},{key:"collectPayment",label:"Payment Information",desc:"Stripe/PayPal, etc."},{key:"collectDeviceData",label:"Device Data",desc:"Cookies, IP address"},{key:"collectLocation",label:"Location Data",desc:"GPS coordinates"}].map(o=>e.jsxs("label",{className:"flex items-start space-x-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all cursor-pointer group",children:[e.jsx("input",{type:"checkbox",checked:r[o.key],onChange:c=>u(o.key,c.target.checked),className:"mt-1 w-5 h-5 rounded border-white/30 text-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-offset-0 bg-white/10"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"text-white font-medium group-hover:text-purple-300 transition-colors",children:o.label}),e.jsx("div",{className:"text-purple-300 text-sm",children:o.desc})]})]},o.key))]}),t===3&&e.jsxs("div",{className:"space-y-6 animate-fadeIn",children:[e.jsx("h2",{className:"text-2xl font-display font-bold text-white mb-6",children:"Third-Party Services"}),[{key:"useGoogleAnalytics",label:"Google Analytics",desc:"Website analytics"},{key:"useGoogleAdsense",label:"Google AdSense",desc:"Ad display"},{key:"useFacebookPixel",label:"Facebook Pixel",desc:"Ad tracking"},{key:"useMailchimp",label:"Mailchimp",desc:"Email marketing"}].map(o=>e.jsxs("label",{className:"flex items-start space-x-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all cursor-pointer group",children:[e.jsx("input",{type:"checkbox",checked:r[o.key],onChange:c=>u(o.key,c.target.checked),className:"mt-1 w-5 h-5 rounded border-white/30 text-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-offset-0 bg-white/10"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"text-white font-medium group-hover:text-purple-300 transition-colors",children:o.label}),e.jsx("div",{className:"text-purple-300 text-sm",children:o.desc})]})]},o.key))]}),e.jsxs("div",{className:"flex justify-between mt-8 pt-6 border-t border-white/20",children:[e.jsx("button",{onClick:N,disabled:t===1,className:"px-6 py-3 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all",children:"← Previous"}),t<3?e.jsx("button",{onClick:k,disabled:t===1&&!g,className:"px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all",children:"Next →"}):e.jsx("button",{onClick:j,disabled:!g,className:"px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-green-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all",children:"🚀 Generate Policy"})]})]})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-md rounded-2xl p-4 border border-yellow-500/30",children:e.jsx("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-9927585604543555","data-ad-slot":"auto","data-ad-format":"auto","data-full-width-responsive":"true"})}),m?e.jsxs("div",{className:"bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl overflow-hidden",children:[e.jsx("div",{className:"bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-4",children:e.jsx("h3",{className:"text-xl font-display font-bold text-white",children:"📄 Generated Privacy Policy"})}),e.jsx("div",{className:"p-6 max-h-[600px] overflow-y-auto custom-scrollbar bg-white text-gray-900",children:e.jsx(A,{components:{h1:({children:o})=>e.jsx("h1",{className:"text-3xl font-bold mb-4 text-gray-900",children:o}),h2:({children:o})=>e.jsx("h2",{className:"text-2xl font-bold mt-6 mb-3 text-gray-800",children:o}),h3:({children:o})=>e.jsx("h3",{className:"text-xl font-semibold mt-4 mb-2 text-gray-700",children:o}),p:({children:o})=>e.jsx("p",{className:"mb-4 leading-relaxed text-gray-700",children:o}),ul:({children:o})=>e.jsx("ul",{className:"list-disc list-inside mb-4 space-y-2",children:o}),li:({children:o})=>e.jsx("li",{className:"text-gray-700",children:o}),a:({children:o,href:c})=>e.jsx("a",{href:c,className:"text-purple-600 hover:underline",children:o}),strong:({children:o})=>e.jsx("strong",{className:"font-semibold text-gray-900",children:o}),hr:()=>e.jsx("hr",{className:"my-6 border-gray-300"})},children:i})}),e.jsxs("div",{className:"bg-white/5 px-6 py-4 border-t border-white/20 flex gap-4",children:[e.jsx("button",{onClick:S,className:"flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all",children:"📋 Copy to Clipboard"}),e.jsx("button",{onClick:C,className:"flex-1 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-green-500/50 transition-all",children:"💾 Download HTML"})]}),e.jsx("div",{className:"bg-red-500/20 border-t border-red-500/30 px-6 py-4",children:e.jsxs("p",{className:"text-red-200 text-sm",children:["⚠️ ",e.jsx("strong",{children:"Disclaimer:"})," This document is a template for informational purposes only and does not constitute legal advice. Please consult a qualified attorney to ensure compliance."]})})]}):e.jsxs("div",{className:"bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-12 text-center",children:[e.jsx("div",{className:"text-6xl mb-4",children:"📝"}),e.jsx("h3",{className:"text-xl font-display font-bold text-white mb-2",children:"Waiting for Generation"}),e.jsx("p",{className:"text-purple-200",children:"Your privacy policy will appear here after completing the form"})]})]})]}),e.jsx("div",{className:"mt-12 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-md rounded-2xl p-8 border border-indigo-500/30",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h3",{className:"text-2xl font-display font-bold text-white mb-3",children:"Need Professional Legal Advice?"}),e.jsx("p",{className:"text-purple-200 mb-6",children:"While our generator provides a great starting point, we strongly recommend consulting with a qualified attorney to ensure full compliance with all applicable laws."}),e.jsx("a",{href:"https://www.rocketlawyer.com/sem/privacy-policy-lp.rl",target:"_blank",rel:"noopener noreferrer",className:"inline-block px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-orange-500/50 transition-all",children:"🔗 Find a Lawyer (Affiliate Link)"})]})}),e.jsxs("footer",{className:"mt-12 text-center text-purple-300 text-sm",children:[e.jsxs("p",{children:["Powered by ",e.jsx("strong",{className:"text-white",children:"TinyWebKit"})," | Open Source Toolkit"]}),e.jsx("p",{className:"mt-2",children:"© 2026 All Rights Reserved"})]})]}),e.jsx("style",{children:`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #a855f7;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9333ea;
        }
      `})]})}function Y(){return e.jsx(q,{})}f.createRoot(document.getElementById("root")).render(e.jsxs(W.StrictMode,{children:[e.jsx(Y,{}),e.jsx(O,{})]}));
