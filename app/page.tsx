"use client";
import { useState } from "react";

const THEMES = {
  rose: {
    name: "🌸 Rose",
    headerGrad: "linear-gradient(135deg, #c2185b 0%, #e91e63 50%, #ad1457 100%)",
    bg: "linear-gradient(145deg, #fff0f5 0%, #fce4ec 60%, #f8bbd0 100%)",
    accent: "#c2185b", accentSoft: "#fce4ec", border: "#f48fb1",
    label: "#880e4f", text: "#3e0016", sub: "#ad1457", divider: "#f48fb1",
    pattern: "rgba(194,24,91,0.05)", ornament: "✿",
    sectionBg: "rgba(255,240,245,0.85)", cardShadow: "0 25px 60px rgba(194,24,91,0.18)",
  },
  royal: {
    name: "👑 Royal",
    headerGrad: "linear-gradient(135deg, #1a237e 0%, #283593 50%, #0d47a1 100%)",
    bg: "linear-gradient(145deg, #e8eaf6 0%, #e3f2fd 60%, #bbdefb 100%)",
    accent: "#1a237e", accentSoft: "#e8eaf6", border: "#9fa8da",
    label: "#1a237e", text: "#0d1b5e", sub: "#283593", divider: "#9fa8da",
    pattern: "rgba(26,35,126,0.05)", ornament: "✦",
    sectionBg: "rgba(232,234,246,0.85)", cardShadow: "0 25px 60px rgba(26,35,126,0.18)",
  },
  emerald: {
    name: "🌿 Emerald",
    headerGrad: "linear-gradient(135deg, #1b5e20 0%, #2e7d32 50%, #1b5e20 100%)",
    bg: "linear-gradient(145deg, #e8f5e9 0%, #f1f8e9 60%, #dcedc8 100%)",
    accent: "#2e7d32", accentSoft: "#e8f5e9", border: "#a5d6a7",
    label: "#1b5e20", text: "#0a2e0c", sub: "#388e3c", divider: "#a5d6a7",
    pattern: "rgba(46,125,50,0.05)", ornament: "❧",
    sectionBg: "rgba(232,245,233,0.85)", cardShadow: "0 25px 60px rgba(46,125,50,0.18)",
  },
  saffron: {
    name: "🏵️ Saffron",
    headerGrad: "linear-gradient(135deg, #e65100 0%, #f57c00 50%, #bf360c 100%)",
    bg: "linear-gradient(145deg, #fff8e1 0%, #fff3e0 60%, #ffe0b2 100%)",
    accent: "#e65100", accentSoft: "#fff8e1", border: "#ffcc80",
    label: "#bf360c", text: "#3e1a00", sub: "#f57c00", divider: "#ffcc80",
    pattern: "rgba(230,81,0,0.05)", ornament: "ॐ",
    sectionBg: "rgba(255,248,225,0.85)", cardShadow: "0 25px 60px rgba(230,81,0,0.15)",
  },
};

const defaultData = {
  name: "Priya Sharma", dob: "1998-03-15", birthTime: "06:30 AM",
  birthplace: "Jaipur, Rajasthan", height: "5'4\"", weight: "52 kg",
  complexion: "Fair", bloodGroup: "B+", religion: "Hindu", caste: "Brahmin",
  education: "M.Tech (Computer Science)", college: "IIT Delhi",
  occupation: "Software Engineer", company: "Infosys Ltd.", income: "12 LPA",
  fatherName: "Shri Rajesh Sharma", fatherOcc: "Business",
  motherName: "Smt. Sunita Sharma", motherOcc: "Homemaker",
  siblings: "1 Elder Brother (Married)",
  address: "45, Subhash Nagar, Jaipur 302016",
  phone: "+91 98765 43210", email: "priya.sharma@email.com",
  hobbies: "Classical Dance, Reading, Cooking",
  languages: "Hindi, English, Rajasthani",
  photo: "",
  note: "I am a simple, family-oriented person who values tradition and togetherness. Looking forward to beginning a beautiful journey with the right partner.",
};

function formatDate(d) {
  if (!d) return "";
  try { return new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }); }
  catch (e) { return d; }
}

function calcAge(d) {
  if (!d) return "";
  return Math.floor((Date.now() - new Date(d)) / (365.25 * 24 * 3600 * 1000)) + " Yrs";
}

function Row({ label, value, tc }) {
  return (
    <div style={{ display: "flex", marginBottom: "5px", lineHeight: "1.5" }}>
      <span style={{ color: tc.label, fontWeight: 700, fontSize: "10.5px", minWidth: "120px", flexShrink: 0 }}>{label}</span>
      <span style={{ color: "#555", fontSize: "10.5px" }}>: {value || "—"}</span>
    </div>
  );
}

function CardSection({ icon, title, tc, children }) {
  return (
    <div style={{
      background: tc.sectionBg, border: "1px solid " + tc.border,
      borderRadius: "10px", padding: "12px 14px", marginBottom: "10px",
    }}>
      <div style={{
        color: tc.accent, fontWeight: 800, fontSize: "10px", textTransform: "uppercase",
        letterSpacing: "0.15em", marginBottom: "10px", paddingBottom: "7px",
        borderBottom: "1.5px solid " + tc.divider,
        display: "flex", alignItems: "center", gap: "6px",
      }}>
        <span style={{ fontSize: "13px" }}>{icon}</span> {title}
      </div>
      {children}
    </div>
  );
}

function BiodataCard({ data, theme }) {
  const tc = THEMES[theme];
  const corners = [{ top: 10, left: 10 }, { top: 10, right: 10 }, { bottom: 10, left: 10 }, { bottom: 10, right: 10 }];
  return (
    <div style={{
      width: "100%", maxWidth: "640px",
      background: tc.bg, borderRadius: "18px",
      border: "2.5px solid " + tc.border, boxShadow: tc.cardShadow,
      fontFamily: "Georgia, 'Times New Roman', serif",
      overflow: "hidden", position: "relative",
    }}>
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(" + tc.pattern + " 1.5px, transparent 1.5px)",
        backgroundSize: "22px 22px",
      }} />
      {corners.map((s, i) => (
        <div key={i} style={{ position: "absolute", fontSize: "20px", color: tc.border, opacity: 0.6, ...s }}>
          {tc.ornament}
        </div>
      ))}

      <div style={{ position: "relative", padding: "24px" }}>
        {/* Header */}
        <div style={{
          background: tc.headerGrad, borderRadius: "14px", padding: "18px 24px",
          textAlign: "center", marginBottom: "20px", boxShadow: "0 6px 24px " + tc.accent + "40",
        }}>
          <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "11px", letterSpacing: "0.35em", marginBottom: "5px" }}>
            Om Shri Ganeshay Namah
          </div>
          <div style={{ color: "white", fontSize: "24px", fontWeight: "bold", letterSpacing: "0.08em", textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>
            विवाह परिचय पत्र
          </div>
          <div style={{ color: "white", fontSize: "13px", letterSpacing: "0.25em", marginTop: "2px", opacity: 0.85 }}>
            MARRIAGE BIODATA
          </div>
          <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "14px", marginTop: "8px" }}>
            {tc.ornament} {tc.ornament} {tc.ornament}
          </div>
        </div>

        {/* Photo + Highlights */}
        <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
          <div style={{
            width: "115px", height: "140px", borderRadius: "12px",
            border: "3px solid " + tc.border, overflow: "hidden", flexShrink: 0,
            background: tc.accentSoft, display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            {data.photo
              ? <img src={data.photo} alt="photo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              : <div style={{ textAlign: "center", color: tc.sub, padding: "8px" }}>
                  <div style={{ fontSize: "36px", marginBottom: "4px" }}>🧕</div>
                  <div style={{ fontSize: "9px" }}>Your Photo</div>
                </div>
            }
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ color: tc.accent, fontSize: "20px", fontWeight: "bold", marginBottom: "3px" }}>
              {data.name || "Your Name"}
            </div>
            <div style={{ color: tc.sub, fontSize: "11px", marginBottom: "12px", fontStyle: "italic" }}>
              {data.occupation}{data.company ? " · " + data.company : ""}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
              {[["Age", calcAge(data.dob)], ["Height", data.height], ["Religion / Caste", data.religion + (data.caste ? " · " + data.caste : "")], ["Blood Group", data.bloodGroup]].map(function(item) {
                return (
                  <div key={item[0]} style={{ background: "rgba(255,255,255,0.7)", border: "1px solid " + tc.border, borderRadius: "8px", padding: "6px 9px" }}>
                    <div style={{ color: tc.label, fontSize: "9px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>{item[0]}</div>
                    <div style={{ color: tc.text, fontSize: "11px", fontWeight: 600, marginTop: "1px" }}>{item[1] || "—"}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1.5px dashed " + tc.divider, margin: "4px 0 16px" }} />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          <CardSection icon="🌸" title="Personal Details" tc={tc}>
            <Row label="Date of Birth" value={formatDate(data.dob)} tc={tc} />
            <Row label="Birth Time" value={data.birthTime} tc={tc} />
            <Row label="Birthplace" value={data.birthplace} tc={tc} />
            <Row label="Height / Weight" value={data.height + " / " + data.weight} tc={tc} />
            <Row label="Complexion" value={data.complexion} tc={tc} />
            <Row label="Blood Group" value={data.bloodGroup} tc={tc} />
            <Row label="Religion" value={data.religion} tc={tc} />
            <Row label="Caste" value={data.caste} tc={tc} />
          </CardSection>

          <CardSection icon="👨‍👩‍👧" title="Family Details" tc={tc}>
            <Row label="Father's Name" value={data.fatherName} tc={tc} />
            <Row label="Father's Occ." value={data.fatherOcc} tc={tc} />
            <Row label="Mother's Name" value={data.motherName} tc={tc} />
            <Row label="Mother's Occ." value={data.motherOcc} tc={tc} />
            <Row label="Siblings" value={data.siblings} tc={tc} />
          </CardSection>
        </div>

        <CardSection icon="🎓" title="Education & Career" tc={tc}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 16px" }}>
            <Row label="Education" value={data.education} tc={tc} />
            <Row label="College" value={data.college} tc={tc} />
            <Row label="Occupation" value={data.occupation} tc={tc} />
            <Row label="Company" value={data.company} tc={tc} />
            <Row label="Annual Income" value={data.income} tc={tc} />
          </div>
        </CardSection>

        <CardSection icon="💫" title="About Me" tc={tc}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 16px" }}>
            <Row label="Languages" value={data.languages} tc={tc} />
            <Row label="Hobbies" value={data.hobbies} tc={tc} />
          </div>
          {data.note && (
            <div style={{ marginTop: "10px", background: "rgba(255,255,255,0.65)", borderRadius: "8px", padding: "10px 12px", borderLeft: "3px solid " + tc.accent }}>
              <div style={{ color: tc.label, fontSize: "9px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "5px" }}>📝 A Note From Me</div>
              <div style={{ color: tc.text, fontSize: "10.5px", lineHeight: "1.7", fontStyle: "italic" }}>{data.note}</div>
            </div>
          )}
        </CardSection>

        <div style={{ background: tc.headerGrad, borderRadius: "12px", padding: "14px 20px", marginTop: "4px" }}>
          <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "9px", textAlign: "center", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "10px" }}>
            Contact Details
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
            {data.phone && <div style={{ color: "white", fontSize: "10.5px", display: "flex", gap: "5px" }}><span>📞</span><span>{data.phone}</span></div>}
            {data.email && <div style={{ color: "white", fontSize: "10.5px", display: "flex", gap: "5px" }}><span>✉️</span><span>{data.email}</span></div>}
            {data.address && <div style={{ color: "white", fontSize: "10.5px", display: "flex", gap: "5px" }}><span>📍</span><span>{data.address}</span></div>}
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "14px", color: tc.border, opacity: 0.7, fontSize: "15px" }}>
          {tc.ornament} {tc.ornament} {tc.ornament}
        </div>
      </div>
    </div>
  );
}

function Field({ label, name, value, onChange, type, options, placeholder }) {
  const inputStyle = {
    width: "100%", padding: "8px 11px", fontSize: "13px",
    border: "1.5px solid #e5d5d0", borderRadius: "8px",
    background: "#fffaf9", color: "#2d1008", outline: "none",
    fontFamily: "Georgia, serif", boxSizing: "border-box",
  };
  return (
    <div style={{ marginBottom: "12px" }}>
      <label style={{ display: "block", fontSize: "11px", fontWeight: 700, color: "#8b4513", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
        {label}
      </label>
      {options ? (
        <select value={value} onChange={function(e) { onChange(name, e.target.value); }} style={inputStyle}>
          {options.map(function(o) { return <option key={o}>{o}</option>; })}
        </select>
      ) : (
        <input type={type || "text"} value={value} placeholder={placeholder || ""} onChange={function(e) { onChange(name, e.target.value); }} style={inputStyle} />
      )}
    </div>
  );
}

function FormSection({ title, icon, children }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <div style={{
        display: "flex", alignItems: "center", gap: "7px",
        fontSize: "11px", fontWeight: 800, color: "#c2185b",
        textTransform: "uppercase", letterSpacing: "0.15em",
        paddingBottom: "8px", marginBottom: "12px",
        borderBottom: "1.5px dashed #f9a8b8",
      }}>
        <span style={{ fontSize: "14px" }}>{icon}</span> {title}
      </div>
      {children}
    </div>
  );
}

export default function App() {
  const [data, setData] = useState(defaultData);
  const [theme, setTheme] = useState("rose");
  const [tab, setTab] = useState("preview");

  function set(k, v) { setData(function(prev) { return Object.assign({}, prev, { [k]: v }); }); }

  function handlePhoto(e) {
    var file = e.target.files && e.target.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function(ev) { set("photo", ev.target.result); };
    reader.readAsDataURL(file);
  }

  var tc = THEMES[theme];

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(160deg, #fdf6f0 0%, #fce4ec 40%, #f3e5f5 100%)", fontFamily: "Georgia, serif" }}>
      <style>{[
        "* { box-sizing: border-box; }",
        "::-webkit-scrollbar { width: 6px; }",
        "::-webkit-scrollbar-track { background: #fce4ec; }",
        "::-webkit-scrollbar-thumb { background: #f48fb1; border-radius: 3px; }",
        "input:focus, select:focus { border-color: #c2185b !important; outline: none; }",
        ".hide-desktop { display: flex; }",
        "@media (min-width: 860px) { .form-panel { display: block !important; } .card-panel { display: flex !important; } .hide-desktop { display: none !important; } }",
      ].join(" ")}</style>

      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #880e4f 0%, #c2185b 50%, #ad1457 100%)", padding: "28px 24px 20px", textAlign: "center", boxShadow: "0 4px 24px rgba(136,14,79,0.3)" }}>
        <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "11px", letterSpacing: "0.4em", marginBottom: "6px" }}>✦ CREATE YOUR ✦</div>
        <div style={{ color: "white", fontSize: "32px", fontWeight: 900, letterSpacing: "0.05em", textShadow: "0 3px 12px rgba(0,0,0,0.3)" }}>
          Marriage Biodata
        </div>
        <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "11px", marginTop: "6px", letterSpacing: "0.15em" }}>
          Fill · Preview · Download as JPG or PDF
        </div>
        <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginTop: "14px", flexWrap: "wrap" }}>
          {Object.keys(THEMES).map(function(key) {
            var t = THEMES[key];
            return (
              <button key={key} onClick={function() { setTheme(key); }} style={{
                padding: "6px 14px", borderRadius: "20px",
                border: "2px solid " + (theme === key ? "white" : "rgba(255,255,255,0.35)"),
                fontSize: "11px", fontWeight: 700, cursor: "pointer",
                background: theme === key ? "white" : "transparent",
                color: theme === key ? "#c2185b" : "rgba(255,255,255,0.85)",
              }}>{t.name}</button>
            );
          })}
        </div>
        <div className="hide-desktop" style={{ gap: "0", justifyContent: "center", marginTop: "14px", background: "rgba(255,255,255,0.15)", borderRadius: "10px", padding: "3px", maxWidth: "260px", margin: "14px auto 0" }}>
          {["form", "preview"].map(function(t) {
            return (
              <button key={t} onClick={function() { setTab(t); }} style={{
                flex: 1, padding: "8px 16px", borderRadius: "8px", border: "none", cursor: "pointer",
                fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em",
                background: tab === t ? "white" : "transparent",
                color: tab === t ? "#c2185b" : "rgba(255,255,255,0.75)",
              }}>
                {t === "form" ? "✏️ Edit" : "👁️ Preview"}
              </button>
            );
          })}
        </div>
      </div>

      <div style={{ display: "flex", gap: "24px", maxWidth: "1300px", margin: "0 auto", padding: "28px 20px", alignItems: "flex-start" }}>

        {/* FORM PANEL */}
        <div className="form-panel" style={{
          width: "400px", flexShrink: 0, background: "white", borderRadius: "18px",
          boxShadow: "0 8px 40px rgba(194,24,91,0.10)", border: "1.5px solid #fce4ec",
          maxHeight: "calc(100vh - 40px)", overflowY: "auto", padding: "24px",
          display: tab === "preview" ? "none" : "block",
        }}>
          <div style={{ fontSize: "16px", fontWeight: 700, color: "#880e4f", marginBottom: "20px" }}>✏️ Edit Your Details</div>

          <FormSection title="Photo Upload" icon="🖼️">
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{ width: "72px", height: "72px", borderRadius: "50%", border: "2.5px solid #f48fb1", overflow: "hidden", background: "#fce4ec", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {data.photo ? <img src={data.photo} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : <span style={{ fontSize: "28px" }}>👤</span>}
              </div>
              <label style={{ cursor: "pointer", fontSize: "12px", fontWeight: 700, background: "#fce4ec", color: "#c2185b", border: "1.5px solid #f48fb1", padding: "8px 16px", borderRadius: "8px" }}>
                Choose Photo
                <input type="file" accept="image/*" onChange={handlePhoto} style={{ display: "none" }} />
              </label>
            </div>
          </FormSection>

          <FormSection title="Personal Info" icon="🌸">
            <Field label="Full Name" name="name" value={data.name} onChange={set} placeholder="e.g. Priya Sharma" />
            <Field label="Date of Birth" name="dob" value={data.dob} onChange={set} type="date" />
            <Field label="Birth Time" name="birthTime" value={data.birthTime} onChange={set} placeholder="e.g. 06:30 AM" />
            <Field label="Birthplace" name="birthplace" value={data.birthplace} onChange={set} placeholder="e.g. Jaipur, Rajasthan" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              <Field label="Height" name="height" value={data.height} onChange={set} placeholder="5ft 4in" />
              <Field label="Weight" name="weight" value={data.weight} onChange={set} placeholder="52 kg" />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              <Field label="Complexion" name="complexion" value={data.complexion} onChange={set} options={["Fair", "Very Fair", "Wheatish", "Dusky", "Dark"]} />
              <Field label="Blood Group" name="bloodGroup" value={data.bloodGroup} onChange={set} options={["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              <Field label="Religion" name="religion" value={data.religion} onChange={set} />
              <Field label="Caste" name="caste" value={data.caste} onChange={set} />
            </div>
          </FormSection>

          <FormSection title="Education & Career" icon="🎓">
            <Field label="Highest Education" name="education" value={data.education} onChange={set} />
            <Field label="College / University" name="college" value={data.college} onChange={set} />
            <Field label="Occupation" name="occupation" value={data.occupation} onChange={set} />
            <Field label="Company / Org." name="company" value={data.company} onChange={set} />
            <Field label="Annual Income" name="income" value={data.income} onChange={set} />
          </FormSection>

          <FormSection title="Family Details" icon="👨‍👩‍👧">
            <Field label="Father Full Name" name="fatherName" value={data.fatherName} onChange={set} />
            <Field label="Father Occupation" name="fatherOcc" value={data.fatherOcc} onChange={set} />
            <Field label="Mother Full Name" name="motherName" value={data.motherName} onChange={set} />
            <Field label="Mother Occupation" name="motherOcc" value={data.motherOcc} onChange={set} />
            <Field label="Siblings" name="siblings" value={data.siblings} onChange={set} />
          </FormSection>

          <FormSection title="Contact" icon="📞">
            <Field label="Phone / WhatsApp" name="phone" value={data.phone} onChange={set} />
            <Field label="Email" name="email" value={data.email} onChange={set} type="email" />
            <Field label="Address" name="address" value={data.address} onChange={set} />
          </FormSection>

          <FormSection title="About Me" icon="💫">
            <Field label="Languages Known" name="languages" value={data.languages} onChange={set} />
            <Field label="Hobbies & Interests" name="hobbies" value={data.hobbies} onChange={set} />
            <div style={{ marginBottom: "12px" }}>
              <label style={{ display: "block", fontSize: "11px", fontWeight: 700, color: "#8b4513", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                📝 Personal Note
              </label>
              <textarea
                value={data.note}
                onChange={function(e) { set("note", e.target.value); }}
                placeholder="Write a short note about yourself, your values, what makes you unique..."
                rows={5}
                style={{
                  width: "100%", padding: "8px 11px", fontSize: "13px",
                  border: "1.5px solid #e5d5d0", borderRadius: "8px",
                  background: "#fffaf9", color: "#2d1008", outline: "none",
                  fontFamily: "Georgia, serif", boxSizing: "border-box",
                  resize: "vertical", lineHeight: "1.6",
                }}
              />
            </div>
          </FormSection>
        </div>

        {/* CARD PREVIEW */}
        <div className="card-panel" style={{ flex: 1, flexDirection: "column", alignItems: "center", gap: "16px", display: tab === "form" ? "none" : "flex" }}>
          <div style={{ textAlign: "center", color: "#8b4513", fontSize: "12px", letterSpacing: "0.08em", opacity: 0.7 }}>
            Live preview — updates as you type
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
            {["🖼️ Download JPG", "📄 Download PDF"].map(function(label, i) {
              return (
                <button key={i} style={{
                  padding: "11px 22px", background: tc.headerGrad, color: "white",
                  border: "none", borderRadius: "30px", fontSize: "13px", fontWeight: 700,
                  cursor: "pointer", boxShadow: "0 4px 16px " + tc.accent + "40",
                }}>{label}</button>
              );
            })}
            <span style={{ fontSize: "10px", color: "#aaa", fontStyle: "italic" }}>Downloads active in Vercel app</span>
          </div>
          <BiodataCard data={data} theme={theme} />
        </div>
      </div>
    </div>
  );
}