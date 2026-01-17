# CleanSight: AI-Powered Smart Waste Reporting & Urban Insight System

CleanSight is a **smart waste reporting and analytics platform** designed for college campuses and local communities. It combines **citizen-assisted reporting**, **AI-based validation**, and **data-driven insights** to improve waste management efficiency, accountability, and responsiveness.

Built as a **hackathon-ready MVP** for **Hyphen ’26**, CleanSight focuses on **feasibility, scalability, and real-world deployment**, while leveraging the **Google ecosystem**.

---

## 🚨 Problem Statement

Poor waste management is a persistent issue on college campuses and in local communities. Overflowing bins, delayed collection, and lack of visibility into sanitation issues lead to unhygienic environments, environmental degradation, and indirect public health risks.

While waste problems are visible, the response system is often:
- Reactive and delayed  
- Highly manual and uncoordinated  
- Lacking structured, real-time data  

Authorities and facility managers struggle to prioritize cleanup, optimize routes, or identify recurring problem zones. There is a clear need for a **low-cost, data-driven solution** that bridges the gap between citizens, campuses, and waste management authorities.

---

## 💡 Solution Overview

**CleanSight** transforms scattered complaints into **actionable intelligence**.

Instead of relying on expensive IoT hardware or purely manual reporting, CleanSight uses a **human–AI hybrid approach**:

- Humans provide context (photo + location)
- AI validates and structures reports
- Backend systems aggregate data for smarter decision-making

This ensures **practical deployment**, **scalability**, and **immediate impact**, making CleanSight suitable for campus-level and community-level use.

---

## ⚙️ How the System Works

### 1️⃣ Waste Reporting (Minimal User Effort)
- Users capture a photo of an overflowing or mismanaged waste bin
- Location is auto-detected using GPS
- Report is submitted in under 10 seconds (no typing required)

> The MVP is designed to **minimize user friction**, not eliminate human input entirely.

---

### 2️⃣ AI-Assisted Validation
Once a report is submitted:
- AI checks whether the image actually contains a waste bin or trash
- Basic classification is applied (overflowing / partially filled / unclear)
- Low-confidence cases are flagged instead of rejected

This balances accuracy with real-world image limitations (lighting, angles, clutter).

---

### 3️⃣ Smart Prioritization & Insights
Instead of forwarding raw complaints, CleanSight:
- Aggregates reports by location and time
- Identifies recurring overflow zones
- Flags high-impact areas for quicker intervention

This allows authorities and campus facility teams to act **proactively**, not reactively.

---

### 4️⃣ Dashboards & Auto-Generated Reports
Inspired by systems like air-quality monitoring dashboards, CleanSight supports:
- Waste hotspot heatmaps
- Time-based trends (events, weekends)
- Severity-based prioritization
- Response-time tracking

The focus is on understanding **patterns**, not just isolated incidents.

---

## 🧠 Google Technologies Used

CleanSight is built to **maximize Google ecosystem integration**, aligning strongly with **Hyphen ’26**.

### 🔹 Frontend
- **Flutter** – Cross-platform mobile app (Android-first, iOS-ready)

### 🔹 Backend & Data
- **Firebase Authentication** – Secure user identity
- **Cloud Firestore** – Real-time report storage
- **Firebase Cloud Functions** – Backend logic and AI triggers
- **Firebase Storage** – Secure image uploads

### 🔹 AI & Intelligence
- **Google Gemini API**
  - Image understanding (waste detection)
  - Basic severity tagging
  - Insight summarization for dashboards
- **Google Cloud Vision API** *(future scope)*

### 🔹 Maps & Location
- **Google Maps API**
  - Auto-tagged locations
  - Heatmaps and spatial analysis

### 🔹 Analytics
- **Firebase Analytics**
  - Reporting trends
  - User engagement metrics

---

## 🧩 Design Decisions & Constraints

### 🔸 Why Not Fully Automated IoT Bins?
- High hardware and maintenance cost
- Deployment friction for campuses

> CleanSight is designed to **reduce human dependency over time**, not remove it unrealistically in the MVP.

---

### 🔸 Handling User Participation
- No mandatory incentives
- Optional eco-recognition and visibility
- Fast, zero-typing reporting to encourage usage

---

### 🔸 AI Accuracy & Limitations
- AI assists rather than replaces human judgment
- Human + AI hybrid prevents over-reliance on imperfect models
- MVP focuses on **high-confidence detection only**

---

### 🔸 Privacy & Ethics
- Reports limited to public or shared spaces
- Images stored only for issue resolution
- Future scope includes automatic anonymization

Ethical data usage is prioritized without over-engineering the MVP.

---

## 🌍 Impact & Value

### 🌱 Environmental Impact
- Cleaner campuses and communities
- Reduced overflow-related pollution

### 🏥 Public Health (Indirect)
- Lower exposure to waste-related health risks
- Improved hygiene conditions

### 🏫 Campus Operations
- Data-driven sanitation planning
- Faster response times
- Accountability through analytics

---

## 🚀 Scalability & Future Scope
- Integration with campus facility systems
- Predictive overflow alerts
- Sensor-based automation in high-priority zones
- City-level dashboards for municipalities

---

## 🏷️ Domain Positioning

**Primary Domain:** Open Innovation  
**Impact Areas:** Sustainability, Smart Campuses, Preventive Public Health  

> CleanSight is a coordination and intelligence platform — not a medical or diagnostic system — ensuring responsible and feasible innovation.

---

## 📌 Hackathon Context

This project was developed as a **working MVP** for **Hyphen ’26**, focusing on:
- Real-world feasibility
- Clean system architecture
- Responsible AI usage
- Google-first technology stack

