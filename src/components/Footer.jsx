function Footer() {
  return (
    <footer style={{
      background: "#222",
      color: "#fff",
      textAlign: "center",
      padding: "1rem 0",
      marginTop: "2rem"
    }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
        <img src="/faded-az-logo.png" style={{ maxHeight: '50px' }} alt="Faded AZ Logo" />
      </div>
      <p>&copy; {new Date().getFullYear()} Faded AZ Barbershop. All rights reserved.</p>
    </footer>
  );
}

export default Footer; 