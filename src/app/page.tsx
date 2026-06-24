export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a",
        color: "white",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        Expat Compass PH
      </h1>

      <p style={{ fontSize: "1.25rem", maxWidth: "700px" }}>
        Helping expats navigate life in the Philippines.
      </p>

      <div style={{ marginTop: "2rem" }}>
        <button
          style={{
            padding: "12px 24px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Get Started
        </button>
      </div>
    </main>
  );
}
