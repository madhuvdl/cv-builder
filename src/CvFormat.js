import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';


const CvFormat = () => {
    const contentToPrint = useRef(null);
    const handlePrint = useReactToPrint({
      // documentTitle: "Print This Document",
      // onBeforePrint: () => console.log("before printing..."),
      // onAfterPrint: () => console.log("after printing..."),
      // removeAfterPrint: true,
      content: () => contentToPrint.current
    });
  
    return (
<div ref={contentToPrint} className="print_body">
        <h1 className="name josefin-sans-bold">Madhubabu V</h1>
        <h3 className="sub-title">Sr. Professional II-Senior Connectivity & NW</h3>
        <div className="left-section">
          <div className="summary">
              <h3 className="time-line-title">Summary</h3>
              <ul className="summary-lists">
                <li>Experienced Senior Software Engineer with over 11.7 years in developing and maintaining high-performance software solutions.</li>
                <li>Skilled in Java, Spring Framework, and related technologies, with a strong understanding of software architecture and design principles</li>
                <li>Known for delivering efficient and quality code, and possessing excellent problem-solving abilities. Passionate about staying current with emerging technologies and industry best practices.</li>
              </ul>
              <div className="page-break"></div>

              <div className="work-exp">
                <h3 className="time-line-title">Work Experience</h3>
                <h5 className="role-title">
                  <span className="time-period">2021-8-Preset</span>
                  <span className="title-txt">Manager/Sr. Professional II-Senior Connectivity & NW Engineer</span> <span className="employer">Capgemini Engineering, Chennai</span>
                </h5>
                <ul className="roles-list">
                  <li>Developed server-side components using Java EE or Spring frameworks</li>
                  <li>Designed and implemented database solutions.</li>
                  <li>Automated build, testing, and deployment processes using CI/CD pipelines.</li>
                  <li>Collaborated with front-end developers for seamless integration.</li>
                  <li>Created prototypes and proof-of-concept implementations.</li>
                  <li>Involved in complex software solutions design, development, and implementation</li>
                  <li>Collaborated with cross-functional teams to define project requirements</li>
                  <li>Identified skill gaps and arranged training programs.</li>
                  <li>Provided guidance and support in troubleshooting and debugging.</li>
                </ul>
                <div className="page-break"></div>
                <div class="box">Content after the property</div>
                <h5 className="role-title">
                <span className="time-period">2018-11-2021-07</span>
                  <span className="title-txt">Senior Software Engineer</span> <span className="employer">Kyyba India (P) Ltd, Chennai</span></h5>
                <ul className="roles-list">
                  <li>Developed server-side components using Java EE or Spring frameworks</li>
                  <li>Designed and implemented database solutions.</li>
                  <li>Automated build, testing, and deployment processes using CI/CD pipelines.</li>
                  <li>Collaborated with front-end developers for seamless integration.</li>
                  <li>Created prototypes and proof-of-concept implementations.</li>
                  <li>Involved in complex software solutions design, development, and implementation</li>
                  <li>Collaborated with cross-functional teams to define project requirements</li>
                  <li>Identified skill gaps and arranged training programs.</li>
                  <li>Provided guidance and support in troubleshooting and debugging.</li>
                </ul>
                <div className="page-break"></div>

              </div>

          </div>
        </div>
        <div className="right-section">
          <h3 className="rt-mn-title">Personal Info</h3>
          <div className="rt-cont">
            <h4 className="rt-mn-sub-title">Phone</h4>
            <p className="rt-info">(+91) 9940393269</p>
            <h4 className="rt-mn-sub-title">Email</h4>
            <p className="rt-info">karthikcse2012@gmail.com</p>
          </div>
          <h3 className="rt-mn-title">Skills</h3>
          <div className="rt-cont">
            <h4 className="rt-mn-sub-title">Language /Technology</h4>
            <p className="rt-info">Java/JEE, Python, Salesforce</p>
            <h4 className="rt-mn-sub-title">Frameworks</h4>
            <p className="rt-info">Spring Boot, Spring Batch, Spring IOC, Spring MVC, Spring Security, Hibernate, Solon, JDBC, JSON, RESTful web services, Micro services, Flask, Apex</p>
            <h4 className="rt-mn-sub-title">DBMS</h4>
            <p className="rt-info">MySQL, Neo4j, PostgreSQL, H2Database, Elasticsearch</p>
            <h4 className="rt-mn-sub-title">Cloud Technology</h4>
            <p className="rt-info">PWS, AWS, EC2, S3, Amazon Workspace</p>
            <h4 className="rt-mn-sub-title">Message Broker</h4>
            <p className="rt-info">RabbitMQ, Kafka</p>
            <h4 className="rt-mn-sub-title">Build/Package/Other Tools</h4>
            <p className="rt-info">Maven, PMD, SonarQube, JIRA</p>
            <h4 className="rt-mn-sub-title">IDL & Debugging Tools</h4>
            <p className="rt-info">Swagger, Grafana, Kibana</p>
            <h4 className="rt-mn-sub-title">CI/CD & VCS Tools</h4>
            <p className="rt-info">GitHub, Bit bucket, Jenkins, Docker, Kubernetes</p>
            <h4 className="rt-mn-sub-title">Reporting Tool</h4>
            <p className="rt-info">Jasper</p>
            <h4 className="rt-mn-sub-title">Testing</h4>
            <p className="rt-info">JUnit, Pytest</p>
            <h4 className="rt-mn-sub-title">Web/Application Servers</h4>
            <p className="rt-info">Apache-Tomcat, Glassfish 3.1, Jetty, JBoss</p>
            <h4 className="rt-mn-sub-title">Repository Management Tools</h4>
            <p className="rt-info">Jfrog Artifactory</p>
            <h4 className="rt-mn-sub-title">Operating System</h4>
            <p className="rt-info">Windows, Linux, macOS</p>
          </div>
          <h3 className="rt-mn-title">Certifications</h3>
          <div className="rt-cont">
            <div className="rt-info">
              <ul>
                <li>Salesforce Certification</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    )
}

export default CvFormat;