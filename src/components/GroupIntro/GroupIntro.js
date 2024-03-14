import React from "react";
import "./group_intro.css";
import Summary from "../Summary/Summary";
import PersonalInfo from "../PersonalInfo/PersonalInfo";

const GroupIntro = ({ description }) => {
  return (
    <div className="col-section">
    <div className="left-section">
    <Summary />

    </div>
    <div className="right-section">
        <PersonalInfo />
          <h3 className="rt-mn-title"><span className="title-icon"><i class="bi bi-laptop"></i></span>Skills</h3>
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
          <h3 className="rt-mn-title"><span className="title-icon"><i class="bi bi-award"></i></span>Certifications</h3>
          <div className="rt-cont">
            <div className="rt-info">
              <ul>
                <li>Salesforce Certification</li>
              </ul>
            </div>
          </div>

    </div>
    </div>
  );
};

export default GroupIntro;
