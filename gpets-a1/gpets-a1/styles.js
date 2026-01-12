import { StyleSheet } from "react-native";

export default StyleSheet.create({
  // ==================== ESTILOS DE LAYOUT PRINCIPAIS ====================
  container: { 
    flex: 1, 
    backgroundColor: "#5cb568" 
  },
  centerContent: { 
    alignItems: "center", 
    paddingVertical: 80 
  },
  
  // ==================== ESTILOS DE TEXTO ====================
  welcomeText: { 
    color: "#F7E9DA", 
    fontSize: 24 
  },
  title: { 
    color: "#F7E9DA", 
    fontSize: 26, 
    fontWeight: "bold", 
    textAlign: "center", 
    marginBottom: 20 
  },
  subtitle: { 
    color: "#F7E9DA", 
    fontSize: 20, 
    marginBottom: 30 
  },
  footerLink: { 
    color: "#F7E9DA", 
    fontSize: 16, 
    marginTop: 15 
  },
  
  // ==================== ESTILOS DE BOTÕES ====================
  btnPrimary: { 
    backgroundColor: "#F7E9DA", 
    borderRadius: 100, 
    paddingVertical: 15, 
    paddingHorizontal: 40, 
    marginBottom: 16 
  },
  btnSecondary: { 
    backgroundColor: "#4A90E2", 
    borderRadius: 100, 
    paddingVertical: 15, 
    paddingHorizontal: 30 
  },
  btnAction: { 
    backgroundColor: "#4A90E2", 
    borderRadius: 100, 
    paddingVertical: 15, 
    width: 220, 
    alignItems: "center", 
    marginBottom: 16 
  },
  btnGray: { 
    backgroundColor: "#909090", 
    borderRadius: 100, 
    paddingVertical: 15, 
    width: 220, 
    alignItems: "center" 
  },
  btnText: { 
    color: "#F7E9DA", 
    fontSize: 16 
  },
  
  // ==================== ESTILOS DE IMAGENS E LOGOS ====================
  logoSmall: { 
    width: 145, 
    height: 61, 
    marginBottom: 40 
  },
  
  // ==================== ESTILOS DE NAVEGAÇÃO ====================
  backButton: { 
    backgroundColor: "#F7E9DA", 
    width: 40, 
    height: 40, 
    borderRadius: 20, 
    justifyContent: "center", 
    alignItems: "center", 
    marginLeft: 20, 
    marginTop: 80 
  },
  
  // ==================== ESTILOS DE FORMULÁRIO (CADASTRO) ====================
  formContainer: {
    width: "85%",
    marginTop: 20,
  },
  label: {
    color: "#F7E9DA",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 5,
  },
  sublabel: {
    color: "#F7E9DA",
    fontSize: 14,
    marginBottom: 8,
    opacity: 0.8,
  },
  input: {
    backgroundColor: "#F7E9DA",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: "#333",
  },
  
  // ==================== ESTILOS DE PÁGINA DE SUCESSO ====================
  successContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  successTitle: {
    fontSize: 80,
    color: "#F7E9DA",
    marginBottom: 20,
  },
  successMessage: {
    color: "#F7E9DA",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  successSubtitle: {
    color: "#F7E9DA",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
    opacity: 0.9,
  },
  
  // ==================== ESTILOS ADICIONAIS PARA LOGIN PESSOA ====================
  // Logo
  logoContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  logo: {
    width: 179,
    height: 70,
  },

  // Grupos de input
  inputGroup: {
    marginBottom: 20,
    width: "100%",
  },

  // Opções
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
    width: "100%",
  },
  lembrarContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#F7E9DA",
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxInner: {
    width: 12,
    height: 12,
    borderRadius: 2,
    backgroundColor: "#4A90E2",
  },
  lembrarText: {
    color: "#F7E9DA",
    fontSize: 14,
  },
  esqueciSenhaText: {
    color: "#F7E9DA",
    fontSize: 14,
    textDecorationLine: "underline",
    fontWeight: "500",
  },

  // Divisor
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
    width: "100%",
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#F7E9DA",
    opacity: 0.5,
  },
  dividerText: {
    color: "#F7E9DA",
    marginHorizontal: 15,
    fontSize: 14,
    opacity: 0.8,
  },

  // Registro
  registroContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
  registroText: {
    color: "#F7E9DA",
    fontSize: 15,
  },
  registroLink: {
    color: "#F7E9DA",
    fontSize: 15,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },

  // Social
  socialContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  socialText: {
    color: "#F7E9DA",
    fontSize: 14,
    marginBottom: 15,
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#F7E9DA",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  socialButtonText: {
    color: "#4A90E2",
    fontSize: 18,
    fontWeight: "bold",
  },
  
  // ==================== ESTILOS PARA "ESQUECI SENHA" ====================
  esqueciSenha: {
    alignSelf: "flex-end",
    marginTop: 10,
    marginBottom: 20,
  },
});