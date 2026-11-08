const API_BASE = 'https://api.orbinuity.nl:34430/api';
const APP_KEY = 'roosterlywork';
const DM_APP_KEY = 'roosterlywork_dm';
const TOKEN_KEY = 'roosterly_token';

const i18n = {
  en: {
    signIn: 'Sign In',
    login: 'Login',
    forgotPassword: 'Forgot password?',
    needAccount: 'Need an account?',
    registerHere: 'Register here',
    twoFactorAuth: 'Two-Factor Authentication',
    twoFactorInstructions: 'Enter the verification code sent to your email.',
    verifyCode: 'Verify Code',
    backToLogin: 'Back to Login',
    navSchedule: 'Schedule',
    navChat: 'Chat & Messages',
    navEarnings: 'Time & Earnings',
    navUnavailability: 'Unavailability',
    navSettings: 'Settings',
    logout: 'Logout',
    weeklySchedule: 'Weekly Schedule',
    addShift: 'Add Shift',
    editShift: 'Edit Shift',
    prevWeek: 'Prev',
    nextWeek: 'Next',
    communicationHub: 'Communication Hub',
    companyChat: 'Workspace Chat',
    directMessages: 'Direct Messages',
    send: 'Send',
    conversations: 'Conversations',
    newChat: 'New DM',
    selectConversation: 'Select a conversation',
    timeEarningsTracker: 'Time & Earnings Tracker',
    payRateConfig: 'Pay Rate & Frequency',
    hourly: 'Hourly',
    weekly: 'Weekly',
    monthly: 'Monthly',
    yearly: 'Yearly',
    saveRate: 'Save Rate',
    thisCurrentWeek: 'This Week',
    thisCurrentMonth: 'This Month',
    customCalculations: 'Custom Timeframe Calculations',
    calculateEarningsSince: 'Calculate earnings since start date:',
    calculateSpecificWeek: 'Calculate for specific week (choose day):',
    calculate: 'Calculate',
    workHoursLog: 'Work Hours Log',
    displayLabel: 'Display:',
    myLoggedHours: 'My Logged Hours',
    teamLoggedHours: 'Workspace Team Hours',
    logTime: 'Log Time',
    unavailabilityTitle: 'Unavailable Days & Time Off',
    setUnavailable: 'Set Unavailable Day',
    myUnavailableDays: 'My Registered Unavailable Dates',
    teamUnavailableDays: 'Team Unavailable Dates',
    workspaceSettings: 'Workspace Settings',
    languageSettings: 'Application Language',
    selectLanguage: 'Select language:',
    inviteMember: 'Invite Member',
    invite: 'Invite',
    membersPermissions: 'Workspace Members & Permissions',
    workspaceMembers: 'Workspace Members',
    createNewWorkspace: 'Create New Workspace',
    cancel: 'Cancel',
    create: 'Create',
    assignShift: 'Assign Shift',
    repeatWeekly: 'Repeat Weekly',
    assign: 'Assign',
    save: 'Save',
    markUnavailableDate: 'Mark Unavailable Date',
    tradeShiftTitle: 'Offer / Trade Shift',
    postToTeamChat: 'Broadcast to Workspace Chat (Open for anyone to take)',
    offerToSpecificMember: 'Offer to specific member',
    offerToMember: 'Select member:',
    sendTradeOffer: 'Send Offer',
    startDirectMessage: 'Start Direct Message',
    selectTeamMember: 'Select team member:',
    openConversation: 'Open Chat',
    roleAdmin: 'Admin',
    roleMember: 'Member',
    shiftStatusConfirmed: 'Attending',
    shiftStatusDeclined: 'Declined',
    shiftStatusOffered: 'Trade Offered',
    shiftStatusCompleted: 'Finished',
    confirmAttendance: 'Confirm Attendance',
    cantCome: 'Cannot Attend',
    offerTrade: 'Trade Shift',
    markFinished: 'Mark Finished',
    takeShiftBtn: 'Take Shift',
    acceptTrade: 'Accept Trade',
    declineTrade: 'Decline Trade',
    deleteShift: 'Delete Shift',
    editShiftBtn: 'Edit Shift',
    makeAdmin: 'Make Admin',
    revokeAdmin: 'Revoke Admin',
    removeMemberBtn: 'Remove',
    deleteLogBtn: 'Delete',
    hoursPrompt: 'Enter hours worked for completed shift:',
    adminMinWarning: 'Cannot remove admin role. A minimum of 1 admin must remain.',
    adminSoleDeleteWarning: 'Cannot remove this member because they are the sole admin.',
    unavailableTag: 'Unavailable',
    effectiveRateText: 'Effective rate:',
    tradeShiftBroadcastTitle: 'Shift Open For Pickup',
    shiftClaimedBy: 'Claimed by'
  },
  nl: {
    signIn: 'Inloggen',
    login: 'Log in',
    forgotPassword: 'Wachtwoord vergeten?',
    needAccount: 'Nog geen account?',
    registerHere: 'Hier registreren',
    twoFactorAuth: 'Tweeledige verificatie',
    twoFactorInstructions: 'Voer de 6-cijferige code in die naar uw e-mail is gestuurd.',
    verifyCode: 'Verifieer code',
    backToLogin: 'Terug naar inloggen',
    navSchedule: 'Rooster',
    navChat: 'Chat & Berichten',
    navEarnings: 'Uren & Inkomsten',
    navUnavailability: 'Beschikbaarheid',
    navSettings: 'Instellingen',
    logout: 'Uitloggen',
    weeklySchedule: 'Weekrooster',
    addShift: 'Dienst toevoegen',
    editShift: 'Dienst bewerken',
    prevWeek: 'Vorige',
    nextWeek: 'Volgende',
    communicationHub: 'Communicatiehub',
    companyChat: 'Werkplek Chat',
    directMessages: 'Privéberichten',
    send: 'Versturen',
    conversations: 'Gesprekken',
    newChat: 'Nieuw bericht',
    selectConversation: 'Selecteer een gesprek',
    timeEarningsTracker: 'Uren & Salarisregistratie',
    payRateConfig: 'Tarieven & Frequentie',
    hourly: 'Per uur',
    weekly: 'Per week',
    monthly: 'Per maand',
    yearly: 'Per jaar',
    saveRate: 'Tarief opslaan',
    thisCurrentWeek: 'Deze week',
    thisCurrentMonth: 'Deze maand',
    customCalculations: 'Aangepaste Berekeningen',
    calculateEarningsSince: 'Bereken inkomsten vanaf startdatum:',
    calculateSpecificWeek: 'Bereken voor specifieke week (kies dag):',
    calculate: 'Berekenen',
    workHoursLog: 'Gewerkte Uren Logboek',
    displayLabel: 'Weergave:',
    myLoggedHours: 'Mijn gewerkte uren',
    teamLoggedHours: 'Team gewerkte uren',
    logTime: 'Uren opslaan',
    unavailabilityTitle: 'Niet-beschikbare Dagen & Verlof',
    setUnavailable: 'Afwezigheid opgeven',
    myUnavailableDays: 'Mijn geregistreerde afwezigheden',
    teamUnavailableDays: 'Team afwezigheden',
    workspaceSettings: 'Werkplekinstellingen',
    languageSettings: 'Taal van de applicatie',
    selectLanguage: 'Kies taal:',
    inviteMember: 'Lid uitnodigen',
    invite: 'Uitnodigen',
    membersPermissions: 'Leden & Rechten',
    workspaceMembers: 'Werkplek Leden',
    createNewWorkspace: 'Nieuwe werkplek maken',
    cancel: 'Annuleren',
    create: 'Aanmaken',
    assignShift: 'Dienst toewijzen',
    repeatWeekly: 'Wekelijks herhalen',
    assign: 'Toewijzen',
    save: 'Opslaan',
    markUnavailableDate: 'Niet-beschikbare datum opslaan',
    tradeShiftTitle: 'Dienst ruilen / aanbieden',
    postToTeamChat: 'Plaats in Werkplek Chat (Iedereen kan deze overnemen)',
    offerToSpecificMember: 'Aan specifiek lid aanbieden',
    offerToMember: 'Kies lid:',
    sendTradeOffer: 'Aanbod verzenden',
    startDirectMessage: 'Start direct bericht',
    selectTeamMember: 'Kies teamlid:',
    openConversation: 'Gesprek openen',
    roleAdmin: 'Beheerder',
    roleMember: 'Medewerker',
    shiftStatusConfirmed: 'Aanwezig',
    shiftStatusDeclined: 'Afgemeld',
    shiftStatusOffered: 'Ruil aangeboden',
    shiftStatusCompleted: 'Afgerond',
    confirmAttendance: 'Aanwezigheid bevestigen',
    cantCome: 'Kan niet komen',
    offerTrade: 'Dienst ruilen',
    markFinished: 'Afronden',
    takeShiftBtn: 'Dienst overnemen',
    acceptTrade: 'Ruil accepteren',
    declineTrade: 'Ruil weigeren',
    deleteShift: 'Dienst wissen',
    editShiftBtn: 'Bewerken',
    makeAdmin: 'Maak beheerder',
    revokeAdmin: 'Beheerder intrekken',
    removeMemberBtn: 'Verwijderen',
    deleteLogBtn: 'Wissen',
    hoursPrompt: 'Voer gewerkte uren in voor deze voltooide dienst:',
    adminMinWarning: 'Kan beheerder niet verwijderen. Er moet minimaal 1 beheerder overblijven.',
    adminSoleDeleteWarning: 'Dit lid kan niet verwijderd worden omdat dit de enige beheerder is.',
    unavailableTag: 'Afwezig',
    effectiveRateText: 'Effectief uurtarief:',
    tradeShiftBroadcastTitle: 'Beschikbare Dienst ter overname',
    shiftClaimedBy: 'Overgenomen door'
  },
  de: {
    signIn: 'Anmelden',
    login: 'Einloggen',
    forgotPassword: 'Passwort vergessen?',
    needAccount: 'Konto benötigt?',
    registerHere: 'Hier registrieren',
    twoFactorAuth: 'Zwei-Faktor-Authentifizierung',
    twoFactorInstructions: 'Geben Sie den 6-stelligen Bestätigungscode ein.',
    verifyCode: 'Code überprüfen',
    backToLogin: 'Zurück zur Anmeldung',
    navSchedule: 'Dienstplan',
    navChat: 'Chat & Nachrichten',
    navEarnings: 'Stunden & Einkommen',
    navUnavailability: 'Abwesenheiten',
    navSettings: 'Einstellungen',
    logout: 'Abmelden',
    weeklySchedule: 'Wochenplan',
    addShift: 'Schicht hinzufügen',
    editShift: 'Schicht bearbeiten',
    prevWeek: 'Zurück',
    nextWeek: 'Weiter',
    communicationHub: 'Kommunikationszentrale',
    companyChat: 'Team-Chat',
    directMessages: 'Direktnachrichten',
    send: 'Senden',
    conversations: 'Unterhaltungen',
    newChat: 'Neue Nachricht',
    selectConversation: 'Unterhaltung wählen',
    timeEarningsTracker: 'Zeit & Verdienstübersicht',
    payRateConfig: 'Lohn & Häufigkeit',
    hourly: 'Stündlich',
    weekly: 'Wöchentlich',
    monthly: 'Monatlich',
    yearly: 'Jährlich',
    saveRate: 'Lohn speichern',
    thisCurrentWeek: 'Diese Woche',
    thisCurrentMonth: 'Dieser Monat',
    customCalculations: 'Benutzerdefinierte Berechnungen',
    calculateEarningsSince: 'Verdienst berechnen ab Datum:',
    calculateSpecificWeek: 'Berechnen für Kalenderwoche:',
    calculate: 'Berechnen',
    workHoursLog: 'Arbeitszeitprotokoll',
    displayLabel: 'Anzeige:',
    myLoggedHours: 'Meine Arbeitsstunden',
    teamLoggedHours: 'Team Arbeitsstunden',
    logTime: 'Zeit erfassen',
    unavailabilityTitle: 'Abwesenheitstage & Urlaub',
    setUnavailable: 'Abwesenheit eintragen',
    myUnavailableDays: 'Meine Abwesenheitstage',
    teamUnavailableDays: 'Team Abwesenheitstage',
    workspaceSettings: 'Arbeitsbereich-Einstellungen',
    languageSettings: 'Sprache der Anwendung',
    selectLanguage: 'Sprache wählen:',
    inviteMember: 'Mitglied einladen',
    invite: 'Einladen',
    membersPermissions: 'Mitglieder & Berechtigungen',
    workspaceMembers: 'Mitglieder',
    createNewWorkspace: 'Neuen Arbeitsbereich erstellen',
    cancel: 'Abbrechen',
    create: 'Erstellen',
    assignShift: 'Schicht zuweisen',
    repeatWeekly: 'Wöchentlich wiederholen',
    assign: 'Zuweisen',
    save: 'Speichern',
    markUnavailableDate: 'Abwesenheit speichern',
    tradeShiftTitle: 'Schicht tauschen / anbieten',
    postToTeamChat: 'Im Team-Chat posten (Frei für jeden zur Übernahme)',
    offerToSpecificMember: 'Bestimmtem Mitglied anbieten',
    offerToMember: 'Mitglied wählen:',
    sendTradeOffer: 'Angebot senden',
    startDirectMessage: 'Direktnachricht starten',
    selectTeamMember: 'Mitglied wählen:',
    openConversation: 'Chat öffnen',
    roleAdmin: 'Administrator',
    roleMember: 'Mitarbeiter',
    shiftStatusConfirmed: 'Bestätigt',
    shiftStatusDeclined: 'Abgelehnt',
    shiftStatusOffered: 'Angeboten',
    shiftStatusCompleted: 'Abgeschlossen',
    confirmAttendance: 'Teilnahme bestätigen',
    cantCome: 'Kann nicht kommen',
    offerTrade: 'Schicht tauschen',
    markFinished: 'Abschließen',
    takeShiftBtn: 'Schicht übernehmen',
    acceptTrade: 'Tausch annehmen',
    declineTrade: 'Tausch ablehnen',
    deleteShift: 'Schicht löschen',
    editShiftBtn: 'Bearbeiten',
    makeAdmin: 'Zum Admin machen',
    revokeAdmin: 'Admin entziehen',
    removeMemberBtn: 'Entfernen',
    deleteLogBtn: 'Löschen',
    hoursPrompt: 'Geleistete Arbeitsstunden für abgeschlossene Schicht eingeben:',
    adminMinWarning: 'Mindestens 1 Administrator muss verbleiben.',
    adminSoleDeleteWarning: 'Dieses Mitglied ist der einzige Administrator und kann nicht entfernt werden.',
    unavailableTag: 'Abwesend',
    effectiveRateText: 'Effektiver Stundensatz:',
    tradeShiftBroadcastTitle: 'Offene Schicht zur Übernahme',
    shiftClaimedBy: 'Übernommen von'
  },
  es: {
    signIn: 'Iniciar sesión',
    login: 'Entrar',
    forgotPassword: '¿Olvidó su contraseña?',
    needAccount: '¿Necesita una cuenta?',
    registerHere: 'Regístrese aquí',
    twoFactorAuth: 'Autenticación de dos factores',
    twoFactorInstructions: 'Ingrese el código de 6 dígitos enviado a su correo.',
    verifyCode: 'Verificar código',
    backToLogin: 'Volver a inicio de sesión',
    navSchedule: 'Horario',
    navChat: 'Chat y Mensajes',
    navEarnings: 'Horas y Ganancias',
    navUnavailability: 'Disponibilidad',
    navSettings: 'Configuración',
    logout: 'Cerrar sesión',
    weeklySchedule: 'Horario Semanal',
    addShift: 'Añadir turno',
    editShift: 'Editar turno',
    prevWeek: 'Anterior',
    nextWeek: 'Siguiente',
    communicationHub: 'Centro de Comunicación',
    companyChat: 'Chat de Trabajo',
    directMessages: 'Mensajes Directos',
    send: 'Enviar',
    conversations: 'Conversaciones',
    newChat: 'Nuevo mensaje',
    selectConversation: 'Seleccione conversación',
    timeEarningsTracker: 'Control de Horas y Ganancias',
    payRateConfig: 'Tarifa y Frecuencia de Pago',
    hourly: 'Por hora',
    weekly: 'Semanal',
    monthly: 'Mensual',
    yearly: 'Anual',
    saveRate: 'Guardar tarifa',
    thisCurrentWeek: 'Esta semana',
    thisCurrentMonth: 'Este mes',
    customCalculations: 'Cálculos Personalizados',
    calculateEarningsSince: 'Calcular ganancias desde fecha:',
    calculateSpecificWeek: 'Calcular semana específica:',
    calculate: 'Calcular',
    workHoursLog: 'Registro de Horas Trabajadas',
    displayLabel: 'Mostrar:',
    myLoggedHours: 'Mis horas registradas',
    teamLoggedHours: 'Horas del equipo',
    logTime: 'Registrar horas',
    unavailabilityTitle: 'Días No Disponibles y Vacaciones',
    setUnavailable: 'Marcar no disponible',
    myUnavailableDays: 'Mis días de indisponibilidad',
    teamUnavailableDays: 'Días de indisponibilidad del equipo',
    workspaceSettings: 'Configuración del Espacio de Trabajo',
    languageSettings: 'Idioma de la aplicación',
    selectLanguage: 'Seleccionar idioma:',
    inviteMember: 'Invitar miembro',
    invite: 'Invitar',
    membersPermissions: 'Miembros y Permisos',
    workspaceMembers: 'Miembros del espacio',
    createNewWorkspace: 'Crear nuevo espacio',
    cancel: 'Cancelar',
    create: 'Crear',
    assignShift: 'Asignar turno',
    repeatWeekly: 'Repetir semanalmente',
    assign: 'Asignar',
    save: 'Guardar',
    markUnavailableDate: 'Guardar fecha no disponible',
    tradeShiftTitle: 'Ofrecer / Cambiar turno',
    postToTeamChat: 'Publicar en Chat de Trabajo (Cualquiera puede tomarlo)',
    offerToSpecificMember: 'Ofrecer a miembro específico',
    offerToMember: 'Seleccionar miembro:',
    sendTradeOffer: 'Enviar oferta',
    startDirectMessage: 'Iniciar mensaje directo',
    selectTeamMember: 'Seleccionar miembro:',
    openConversation: 'Abrir chat',
    roleAdmin: 'Administrador',
    roleMember: 'Miembro',
    shiftStatusConfirmed: 'Confirmado',
    shiftStatusDeclined: 'Declinado',
    shiftStatusOffered: 'Ofrecido',
    shiftStatusCompleted: 'Finalizado',
    confirmAttendance: 'Confirmar asistencia',
    cantCome: 'No puedo asistir',
    offerTrade: 'Cambiar turno',
    markFinished: 'Finalizar',
    takeShiftBtn: 'Tomar turno',
    acceptTrade: 'Aceptar cambio',
    declineTrade: 'Rechazar cambio',
    deleteShift: 'Eliminar turno',
    editShiftBtn: 'Editar',
    makeAdmin: 'Hacer administrador',
    revokeAdmin: 'Revocar administrador',
    removeMemberBtn: 'Eliminar',
    deleteLogBtn: 'Borrar',
    hoursPrompt: 'Ingrese horas trabajadas para el turno completado:',
    adminMinWarning: 'Debe quedar un mínimo de 1 administrador.',
    adminSoleDeleteWarning: 'No se puede eliminar al único administrador.',
    unavailableTag: 'No disponible',
    effectiveRateText: 'Tarifa efectiva por hora:',
    tradeShiftBroadcastTitle: 'Turno Disponible para Tomar',
    shiftClaimedBy: 'Tomado por'
  },
  fr: {
    signIn: 'Connexion',
    login: 'Se connecter',
    forgotPassword: 'Mot de passe oublié ?',
    needAccount: 'Besoin d\'un compte ?',
    registerHere: 'Inscrivez-vous ici',
    twoFactorAuth: 'Authentification à deux facteurs',
    twoFactorInstructions: 'Entrez le code à 6 chiffres reçu par e-mail.',
    verifyCode: 'Vérifier le code',
    backToLogin: 'Retour à la connexion',
    navSchedule: 'Planning',
    navChat: 'Chat et Messages',
    navEarnings: 'Heures et Revenus',
    navUnavailability: 'Disponibilités',
    navSettings: 'Paramètres',
    logout: 'Déconnexion',
    weeklySchedule: 'Planning Hebdomadaire',
    addShift: 'Ajouter un quart',
    editShift: 'Modifier un quart',
    prevWeek: 'Précédent',
    nextWeek: 'Suivant',
    communicationHub: 'Hub de Communication',
    companyChat: 'Chat d\'Équipe',
    directMessages: 'Messages Privés',
    send: 'Envoyer',
    conversations: 'Conversations',
    newChat: 'Nouveau message',
    selectConversation: 'Sélectionner une conversation',
    timeEarningsTracker: 'Suivi des Heures et Revenus',
    payRateConfig: 'Taux de Rémunération',
    hourly: 'Horaire',
    weekly: 'Hebdomadaire',
    monthly: 'Mensuel',
    yearly: 'Annuel',
    saveRate: 'Enregistrer',
    thisCurrentWeek: 'Cette semaine',
    thisCurrentMonth: 'Ce mois-ci',
    customCalculations: 'Calculs Personnalisés',
    calculateEarningsSince: 'Calculer les revenus depuis le :',
    calculateSpecificWeek: 'Calculer pour une semaine spécifique :',
    calculate: 'Calculer',
    workHoursLog: 'Journal des Heures Travaillées',
    displayLabel: 'Affichage :',
    myLoggedHours: 'Mes heures travaillées',
    teamLoggedHours: 'Heures de l\'équipe',
    logTime: 'Enregistrer heures',
    unavailabilityTitle: 'Indisponibilités et Congés',
    setUnavailable: 'Indiquer indisponibilité',
    myUnavailableDays: 'Mes dates d\'indisponibilité',
    teamUnavailableDays: 'Indisponibilités de l\'équipe',
    workspaceSettings: 'Paramètres de l\'Espace',
    languageSettings: 'Langue de l\'application',
    selectLanguage: 'Sélectionner la langue :',
    inviteMember: 'Inviter un membre',
    invite: 'Inviter',
    membersPermissions: 'Membres et Permissions',
    workspaceMembers: 'Membres de l\'espace',
    createNewWorkspace: 'Nouvel espace',
    cancel: 'Annuler',
    create: 'Créer',
    assignShift: 'Attribuer un quart',
    repeatWeekly: 'Répéter chaque semaine',
    assign: 'Attribuer',
    save: 'Enregistrer',
    markUnavailableDate: 'Enregistrer indisponibilité',
    tradeShiftTitle: 'Échanger / Proposer un quart',
    postToTeamChat: 'Diffuser dans le Chat d\'Équipe (Libre à qui veut le prendre)',
    offerToSpecificMember: 'Proposer à un membre précis',
    offerToMember: 'Choisir le membre :',
    sendTradeOffer: 'Envoyer l\'offre',
    startDirectMessage: 'Nouveau message privé',
    selectTeamMember: 'Choisir le membre :',
    openConversation: 'Ouvrir la discussion',
    roleAdmin: 'Administrateur',
    roleMember: 'Membre',
    shiftStatusConfirmed: 'Présent',
    shiftStatusDeclined: 'Absent',
    shiftStatusOffered: 'Échange proposé',
    shiftStatusCompleted: 'Terminé',
    confirmAttendance: 'Confirmer présence',
    cantCome: 'Ne peut pas venir',
    offerTrade: 'Échanger le quart',
    markFinished: 'Terminer le quart',
    takeShiftBtn: 'Prendre le quart',
    acceptTrade: 'Accepter l\'échange',
    declineTrade: 'Refuser l\'échange',
    deleteShift: 'Supprimer',
    editShiftBtn: 'Modifier',
    makeAdmin: 'Nommer administrateur',
    revokeAdmin: 'Révoquer administrateur',
    removeMemberBtn: 'Retirer',
    deleteLogBtn: 'Supprimer',
    hoursPrompt: 'Entrez les heures travaillées pour ce quart terminé :',
    adminMinWarning: 'Au moins 1 administrateur doit être conservé.',
    adminSoleDeleteWarning: 'Impossible de supprimer le seul administrateur restant.',
    unavailableTag: 'Indisponible',
    effectiveRateText: 'Taux horaire effectif :',
    tradeShiftBroadcastTitle: 'Quart Disponible à Prendre',
    shiftClaimedBy: 'Pris par'
  }
};

let currentLang = 'en';

function t(key) {
  return (i18n[currentLang] && i18n[currentLang][key]) || (i18n.en && i18n.en[key]) || key;
}

function applyLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key && i18n[lang] && i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });

  if (elements.languageSelect) {
    elements.languageSelect.value = lang;
  }
}

let authToken = localStorage.getItem(TOKEN_KEY) || getCookie(TOKEN_KEY) || null;
let currentUser = null;
let currentRoomId = null;
let rooms = [];
let dmRooms = [];
let activeDmRoomId = null;
let activeTradeShiftId = null;

let localData = {
  personal: {
    rate: 0,
    period: 'hourly',
    lang: 'en'
  },
  roomState: {
    shifts: [],
    messages: [],
    admins: [],
    timeLogs: [],
    userRates: {},
    unavailability: []
  },
  activeDmState: {
    messages: []
  }
};

let currentWeekStart = getMonday(new Date());

const elements = {
  authContainer: document.getElementById('auth-container'),
  appContainer: document.getElementById('app-container'),
  loginForm: document.getElementById('login-form'),
  tfaForm: document.getElementById('tfa-form'),
  authError: document.getElementById('auth-error'),
  btnCancelTfa: document.getElementById('btn-cancel-tfa'),
  
  workspaceSelect: document.getElementById('workspace-select'),
  btnCreateWorkspace: document.getElementById('btn-create-workspace'),
  currentUserDisplay: document.getElementById('current-user-display'),
  btnLogout: document.getElementById('btn-logout'),
  navLinks: document.querySelectorAll('.nav-links li'),
  views: document.querySelectorAll('.view'),
  
  scheduleRoleBadge: document.getElementById('schedule-role-badge'),
  btnAddShift: document.getElementById('btn-add-shift'),
  currentWeekDisplay: document.getElementById('current-week-display'),
  btnPrevWeek: document.getElementById('btn-prev-week'),
  btnNextWeek: document.getElementById('btn-next-week'),
  calendarGrid: document.getElementById('calendar-grid'),
  
  tabCompanyChat: document.getElementById('tab-company-chat'),
  tabPrivateChat: document.getElementById('tab-private-chat'),
  companyChatPanel: document.getElementById('company-chat-panel'),
  privateChatPanel: document.getElementById('private-chat-panel'),
  
  companyChatMessages: document.getElementById('company-chat-messages'),
  companyChatForm: document.getElementById('company-chat-form'),
  companyChatInput: document.getElementById('company-chat-input'),
  companyChatImage: document.getElementById('company-chat-image'),
  
  dmRoomsList: document.getElementById('dm-rooms-list'),
  btnNewDm: document.getElementById('btn-new-dm'),
  dmActiveHeader: document.getElementById('dm-active-header'),
  dmActiveTitle: document.getElementById('dm-active-title'),
  dmChatMessages: document.getElementById('dm-chat-messages'),
  dmChatForm: document.getElementById('dm-chat-form'),
  dmChatInput: document.getElementById('dm-chat-input'),
  dmChatImage: document.getElementById('dm-chat-image'),
  
  payRateInput: document.getElementById('pay-rate-input'),
  payPeriodSelect: document.getElementById('pay-period-select'),
  btnSaveRate: document.getElementById('btn-save-rate'),
  effectiveRateDisplay: document.getElementById('effective-rate-display'),
  weekHours: document.getElementById('week-hours'),
  weekEarnings: document.getElementById('week-earnings'),
  monthHours: document.getElementById('month-hours'),
  monthEarnings: document.getElementById('month-earnings'),
  
  queryStartDate: document.getElementById('query-start-date'),
  btnCalcSince: document.getElementById('btn-calc-since'),
  calcSinceResult: document.getElementById('calc-since-result'),
  querySpecificWeek: document.getElementById('query-specific-week'),
  btnCalcWeek: document.getElementById('btn-calc-week'),
  calcWeekResult: document.getElementById('calc-week-result'),
  
  hoursFilterSelect: document.getElementById('hours-filter-select'),
  logHoursForm: document.getElementById('log-hours-form'),
  logDate: document.getElementById('log-date'),
  logDuration: document.getElementById('log-duration'),
  logNotes: document.getElementById('log-notes'),
  hoursLogList: document.getElementById('hours-log-list'),
  
  btnAddUnavailable: document.getElementById('btn-add-unavailable'),
  myUnavailabilityList: document.getElementById('my-unavailability-list'),
  teamUnavailabilityList: document.getElementById('team-unavailability-list'),
  
  languageSelect: document.getElementById('language-select'),
  adminSettings: document.getElementById('admin-settings'),
  nonAdminSettings: document.getElementById('non-admin-settings'),
  inviteForm: document.getElementById('invite-form'),
  inviteUsername: document.getElementById('invite-username'),
  memberList: document.getElementById('member-list'),
  readonlyMemberList: document.getElementById('readonly-member-list'),
  
  modalCreateWorkspace: document.getElementById('modal-create-workspace'),
  createWorkspaceForm: document.getElementById('create-workspace-form'),
  workspaceName: document.getElementById('workspace-name'),
  workspaceDesc: document.getElementById('workspace-desc'),
  
  modalAddShift: document.getElementById('modal-add-shift'),
  addShiftForm: document.getElementById('add-shift-form'),
  shiftUser: document.getElementById('shift-user'),
  shiftDate: document.getElementById('shift-date'),
  shiftTime: document.getElementById('shift-time'),
  shiftRepeat: document.getElementById('shift-repeat'),

  modalEditShift: document.getElementById('modal-edit-shift'),
  editShiftForm: document.getElementById('edit-shift-form'),
  editShiftId: document.getElementById('edit-shift-id'),
  editShiftUser: document.getElementById('edit-shift-user'),
  editShiftDate: document.getElementById('edit-shift-date'),
  editShiftTime: document.getElementById('edit-shift-time'),
  editShiftRepeat: document.getElementById('edit-shift-repeat'),
  
  modalAddUnavailable: document.getElementById('modal-add-unavailable'),
  addUnavailableForm: document.getElementById('add-unavailable-form'),
  unavailableDate: document.getElementById('unavailable-date'),
  unavailableReason: document.getElementById('unavailable-reason'),
  
  modalTradeShift: document.getElementById('modal-trade-shift'),
  tradeShiftForm: document.getElementById('trade-shift-form'),
  tradeShiftInfo: document.getElementById('trade-shift-info'),
  tradeModeOpen: document.getElementById('trade-mode-open'),
  tradeModeDirect: document.getElementById('trade-mode-direct'),
  tradeDirectSelectContainer: document.getElementById('trade-direct-select-container'),
  tradeTargetUser: document.getElementById('trade-target-user'),
  
  modalNewDm: document.getElementById('modal-new-dm'),
  newDmForm: document.getElementById('new-dm-form'),
  dmTargetUser: document.getElementById('dm-target-user'),
  
  closeModals: document.querySelectorAll('.close-modal')
};

function getRoomKey(room) {
  if (!room) return null;
  return room.roomId || room.id || room._id || null;
}

function getUserId(user) {
  if (!user) return null;
  return user.id || user.userId || user._id || null;
}

function getUserDisplayName(user) {
  if (!user) return '';
  return user.displayName || user.name || user.username || '';
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/;SameSite=Lax`;
}

function deleteCookie(name) {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;SameSite=Lax`;
}

function persistToken(token) {
  authToken = token;
  localStorage.setItem(TOKEN_KEY, token);
  setCookie(TOKEN_KEY, token, 7);
}

function clearPersistedToken() {
  authToken = null;
  localStorage.removeItem(TOKEN_KEY);
  deleteCookie(TOKEN_KEY);
}

function getMonday(d) {
  d = new Date(d);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(d.setDate(diff));
}

function formatISODate(date) {
  return date.toISOString().split('T')[0];
}

function showAuthError(msg) {
  elements.authError.textContent = msg || '';
}

async function apiCall(endpoint, method = 'GET', body = null) {
  const token = authToken || localStorage.getItem(TOKEN_KEY) || getCookie(TOKEN_KEY);
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const options = { method, headers };
  if (body) options.body = JSON.stringify(body);

  const res = await fetch(`${API_BASE}${endpoint}`, options);
  if (res.status === 404 && method === 'GET') return null;

  if (res.status === 401) {
    if (!endpoint.startsWith('/auth/')) {
      handleLogout();
    }
    const errData = await res.json().catch(() => ({ error: 'Unauthorized' }));
    throw new Error(errData.error || 'Unauthorized');
  }

  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);
  return data;
}

let tempUserId = null;

elements.loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  showAuthError('');
  const identifier = document.getElementById('login-identifier').value.trim();
  const password = document.getElementById('login-password').value;

  try {
    const data = await apiCall('/auth/login', 'POST', { identifier, password });
    if (data.requiresTwoFactor) {
      tempUserId = data.userId;
      elements.loginForm.classList.remove('active');
      elements.tfaForm.classList.add('active');
      document.getElementById('tfa-code').value = '';
    } else {
      persistToken(data.token);
      await initializeApp();
    }
  } catch (err) {
    showAuthError(err.message);
  }
});

elements.tfaForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  showAuthError('');
  const code = document.getElementById('tfa-code').value.trim();
  
  if (!tempUserId) {
    showAuthError('Session expired. Please sign in again.');
    resetToLoginView();
    return;
  }

  try {
    const data = await apiCall('/auth/login/2fa', 'POST', { userId: tempUserId, code });
    if (!data.token) {
      throw new Error('Authentication failed: Missing session token.');
    }
    persistToken(data.token);
    tempUserId = null;
    await initializeApp();
  } catch (err) {
    showAuthError(err.message || 'Invalid 2FA code.');
  }
});

elements.btnCancelTfa.addEventListener('click', () => {
  tempUserId = null;
  resetToLoginView();
});

function resetToLoginView() {
  elements.tfaForm.classList.remove('active');
  elements.loginForm.classList.add('active');
  showAuthError('');
}

function handleLogout() {
  clearPersistedToken();
  tempUserId = null;
  currentUser = null;
  rooms = [];
  dmRooms = [];
  currentRoomId = null;
  activeDmRoomId = null;
  elements.appContainer.classList.remove('active');
  elements.authContainer.classList.add('active');
  resetToLoginView();
}

elements.btnLogout.addEventListener('click', handleLogout);

async function initializeApp() {
  try {
    const profile = await apiCall('/account/me');
    if (!profile) throw new Error('Failed to retrieve user profile.');
    
    currentUser = profile.user || profile;
    if (!getUserId(currentUser)) {
      currentUser.id = currentUser.userId || currentUser._id;
    }

    elements.authContainer.classList.remove('active');
    elements.tfaForm.classList.remove('active');
    elements.loginForm.classList.add('active');
    elements.appContainer.classList.add('active');
    elements.currentUserDisplay.textContent = getUserDisplayName(currentUser);
    
    await pullPersonalData();
    applyLanguage(localData.personal.lang || 'en');
    
    await pullRooms();
    await pullDmRooms();
    
    if (rooms.length > 0) {
      const activeId = currentRoomId || getRoomKey(rooms[0]);
      selectRoom(activeId);
    } else {
      renderEmptyState();
    }
    
    renderEarnings();
  } catch (err) {
    showAuthError(err.message || 'Failed to initialize session.');
    handleLogout();
  }
}

async function pullPersonalData() {
  try {
    const data = await apiCall(`/external/${APP_KEY}`);
    if (data) {
      const payload = data.data || data;
      if (typeof payload === 'object') {
        localData.personal.rate = Number(payload.rate) || 0;
        localData.personal.period = payload.period || 'hourly';
        localData.personal.lang = payload.lang || 'en';
      }
    }
  } catch (err) {
    localData.personal = { rate: 0, period: 'hourly', lang: 'en' };
  }
}

async function pushPersonalData() {
  await apiCall(`/external/${APP_KEY}`, 'PUT', localData.personal);
}

elements.languageSelect.addEventListener('change', async (e) => {
  const chosen = e.target.value;
  localData.personal.lang = chosen;
  applyLanguage(chosen);
  await pushPersonalData();
  const room = rooms.find(r => getRoomKey(r) === currentRoomId);
  if (room) {
    updateRoleUI(room);
    renderSchedule();
    renderEarnings();
    renderUnavailability();
    renderSettings(room);
  }
});

async function pullRooms() {
  try {
    const res = await apiCall(`/external/rooms?appId=${APP_KEY}`);
    rooms = Array.isArray(res) ? res : (res && res.rooms) ? res.rooms : [];
    elements.workspaceSelect.innerHTML = '';
    rooms.forEach(room => {
      const id = getRoomKey(room);
      const opt = document.createElement('option');
      opt.value = id;
      opt.textContent = room.name;
      elements.workspaceSelect.appendChild(opt);
    });
    if (currentRoomId) {
      elements.workspaceSelect.value = currentRoomId;
    }
  } catch (err) {
    rooms = [];
  }
}

elements.workspaceSelect.addEventListener('change', (e) => {
  selectRoom(e.target.value);
});

function getRoomAdmins(room) {
  const hostId = room.hostId || room.ownerId || room.userId || (room.host && getUserId(room.host));
  let admins = localData.roomState.admins;
  if (!Array.isArray(admins) || admins.length === 0) {
    admins = hostId ? [hostId] : [];
    localData.roomState.admins = admins;
  }
  return admins;
}

function isUserAdmin(room, userId) {
  const admins = getRoomAdmins(room);
  return admins.includes(userId);
}

function selectRoom(roomId) {
  if (!roomId) return;
  currentRoomId = roomId;
  elements.workspaceSelect.value = roomId;

  const room = rooms.find(r => getRoomKey(r) === roomId);
  if (!room) return;
  
  if (room.cases && room.cases.length > 0 && room.cases[0].blocks && room.cases[0].blocks[0]) {
    try {
      const parsed = JSON.parse(room.cases[0].blocks[0]);
      localData.roomState = {
        shifts: Array.isArray(parsed.shifts) ? parsed.shifts : [],
        messages: Array.isArray(parsed.messages) ? parsed.messages : [],
        admins: Array.isArray(parsed.admins) ? parsed.admins : [],
        timeLogs: Array.isArray(parsed.timeLogs) ? parsed.timeLogs : [],
        userRates: (typeof parsed.userRates === 'object' && parsed.userRates) ? parsed.userRates : {},
        unavailability: Array.isArray(parsed.unavailability) ? parsed.unavailability : []
      };
    } catch (e) {
      localData.roomState = { shifts: [], messages: [], admins: [], timeLogs: [], userRates: {}, unavailability: [] };
    }
  } else {
    localData.roomState = { shifts: [], messages: [], admins: [], timeLogs: [], userRates: {}, unavailability: [] };
  }

  getRoomAdmins(room);
  
  updateRoleUI(room);
  renderSchedule();
  renderCompanyChat();
  renderEarnings();
  renderUnavailability();
  renderSettings(room);
}

function updateRoleUI(room) {
  const activeUserId = getUserId(currentUser);
  const isAdmin = isUserAdmin(room, activeUserId);

  elements.scheduleRoleBadge.textContent = isAdmin ? t('roleAdmin') : t('roleMember');
  elements.scheduleRoleBadge.className = `role-badge ${isAdmin ? 'admin' : ''}`;
  
  if (isAdmin) {
    elements.btnAddShift.classList.remove('hidden');
    elements.adminSettings.classList.remove('hidden');
    elements.nonAdminSettings.classList.add('hidden');
  } else {
    elements.btnAddShift.classList.add('hidden');
    elements.adminSettings.classList.add('hidden');
    elements.nonAdminSettings.classList.remove('hidden');
  }
}

async function pushRoomData() {
  if (!currentRoomId) return;
  const room = rooms.find(r => getRoomKey(r) === currentRoomId);
  if (!room) return;

  const cases = [{
    id: `data_${currentRoomId}`,
    folderId: currentRoomId,
    title: 'WorkspaceState',
    blocks: [JSON.stringify(localData.roomState)]
  }];

  await apiCall(`/external/rooms/${currentRoomId}`, 'PUT', {
    name: room.name,
    description: room.description || '',
    cases
  });
}

async function autoSync() {
  if (!currentUser || !authToken) return;
  await pullRooms();
  if (currentRoomId) selectRoom(currentRoomId);
  await pullDmRooms();
  if (activeDmRoomId) selectDmRoom(activeDmRoomId);
}

setInterval(autoSync, 10000);

elements.navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    elements.navLinks.forEach(l => l.classList.remove('active'));
    e.target.classList.add('active');
    
    elements.views.forEach(v => v.classList.remove('active'));
    const target = e.target.getAttribute('data-target');
    document.getElementById(target).classList.add('active');
  });
});

elements.btnCreateWorkspace.addEventListener('click', () => {
  elements.modalCreateWorkspace.classList.add('active');
});

elements.closeModals.forEach(btn => {
  btn.addEventListener('click', () => {
    elements.modalCreateWorkspace.classList.remove('active');
    elements.modalAddShift.classList.remove('active');
    elements.modalEditShift.classList.remove('active');
    elements.modalAddUnavailable.classList.remove('active');
    elements.modalTradeShift.classList.remove('active');
    elements.modalNewDm.classList.remove('active');
    activeTradeShiftId = null;
  });
});

elements.createWorkspaceForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const payload = {
    name: elements.workspaceName.value.trim(),
    description: elements.workspaceDesc.value.trim(),
    appId: APP_KEY
  };
  try {
    const newRoom = await apiCall('/external/rooms', 'POST', payload);
    elements.modalCreateWorkspace.classList.remove('active');
    elements.createWorkspaceForm.reset();
    await pullRooms();
    const newId = getRoomKey(newRoom) || (newRoom.room && getRoomKey(newRoom.room));
    if (newId) {
      selectRoom(newId);
    }
  } catch (err) {
    alert(err.message);
  }
});

function renderSchedule() {
  elements.calendarGrid.innerHTML = '';
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const activeUserId = getUserId(currentUser);
  const room = rooms.find(r => getRoomKey(r) === currentRoomId);
  const amAdmin = room ? isUserAdmin(room, activeUserId) : false;
  
  const weekEnd = new Date(currentWeekStart);
  weekEnd.setDate(currentWeekStart.getDate() + 6);
  elements.currentWeekDisplay.textContent = `${currentWeekStart.toLocaleDateString()} - ${weekEnd.toLocaleDateString()}`;

  for (let i = 0; i < 7; i++) {
    const currentDay = new Date(currentWeekStart);
    currentDay.setDate(currentWeekStart.getDate() + i);
    const dateStr = formatISODate(currentDay);
    
    const dayDiv = document.createElement('div');
    dayDiv.className = 'calendar-day';
    
    const header = document.createElement('div');
    header.className = 'day-header';
    header.textContent = `${days[i]} ${currentDay.getDate()}`;
    dayDiv.appendChild(header);

    const dayUnavail = (localData.roomState.unavailability || []).filter(u => u.date === dateStr);
    dayUnavail.forEach(u => {
      const uTag = document.createElement('div');
      uTag.className = 'unavailable-indicator';
      uTag.textContent = `${t('unavailableTag')}: ${u.displayName} (${u.reason})`;
      dayDiv.appendChild(uTag);
    });

    const dayShifts = localData.roomState.shifts.filter(s => {
      if (s.repeat) {
        const shiftDate = new Date(s.date);
        return shiftDate.getDay() === currentDay.getDay() && shiftDate <= currentDay;
      }
      return s.date === dateStr;
    });

    dayShifts.forEach(shift => {
      const card = document.createElement('div');
      card.className = `shift-card ${shift.status === 'completed' ? 'completed' : ''}`;
      
      const titleSpan = document.createElement('span');
      titleSpan.innerHTML = `<strong>${shift.displayName}</strong><br>${shift.time}`;
      card.appendChild(titleSpan);

      const statusBadge = document.createElement('span');
      const statusKey = shift.status === 'confirmed' ? 'shiftStatusConfirmed' :
                        shift.status === 'declined' ? 'shiftStatusDeclined' :
                        shift.status === 'offered' ? 'shiftStatusOffered' :
                        shift.status === 'completed' ? 'shiftStatusCompleted' : '';
      if (statusKey) {
        statusBadge.className = `status-badge ${shift.status}`;
        statusBadge.textContent = t(statusKey);
        card.appendChild(statusBadge);
      }

      const actionsDiv = document.createElement('div');
      actionsDiv.className = 'shift-actions';

      const isMyShift = shift.userId === activeUserId;
      const isOpenOffer = shift.status === 'offered' && shift.tradeOffer && shift.tradeOffer.mode === 'open';
      const isDirectOfferToMe = shift.status === 'offered' && shift.tradeOffer && shift.tradeOffer.toUserId === activeUserId;

      if (isMyShift && shift.status !== 'completed') {
        if (shift.status !== 'confirmed') {
          const btnConfirm = document.createElement('button');
          btnConfirm.className = 'btn-secondary';
          btnConfirm.textContent = t('confirmAttendance');
          btnConfirm.onclick = () => updateShiftStatus(shift.id, 'confirmed');
          actionsDiv.appendChild(btnConfirm);
        }

        if (shift.status !== 'declined') {
          const btnDecline = document.createElement('button');
          btnDecline.className = 'btn-secondary';
          btnDecline.textContent = t('cantCome');
          btnDecline.onclick = () => updateShiftStatus(shift.id, 'declined');
          actionsDiv.appendChild(btnDecline);
        }

        const btnTrade = document.createElement('button');
        btnTrade.className = 'btn-secondary';
        btnTrade.textContent = t('offerTrade');
        btnTrade.onclick = () => openTradeModal(shift);
        actionsDiv.appendChild(btnTrade);

        const btnFinish = document.createElement('button');
        btnFinish.className = 'btn-primary';
        btnFinish.textContent = t('markFinished');
        btnFinish.onclick = () => completeShift(shift);
        actionsDiv.appendChild(btnFinish);
      }

      if (!isMyShift && (isOpenOffer || isDirectOfferToMe)) {
        const btnTake = document.createElement('button');
        btnTake.className = 'btn-primary';
        btnTake.textContent = t('takeShiftBtn');
        btnTake.onclick = () => claimShift(shift.id);
        actionsDiv.appendChild(btnTake);

        if (isDirectOfferToMe) {
          const btnDeclineTrade = document.createElement('button');
          btnDeclineTrade.className = 'btn-secondary';
          btnDeclineTrade.textContent = t('declineTrade');
          btnDeclineTrade.onclick = () => declineShiftTrade(shift.id);
          actionsDiv.appendChild(btnDeclineTrade);
        }
      }

      if (amAdmin) {
        const btnEdit = document.createElement('button');
        btnEdit.className = 'btn-secondary';
        btnEdit.textContent = t('editShiftBtn');
        btnEdit.onclick = () => openEditShiftModal(shift);
        actionsDiv.appendChild(btnEdit);

        const btnDel = document.createElement('button');
        btnDel.className = 'btn-secondary';
        btnDel.textContent = t('deleteShift');
        btnDel.onclick = () => deleteShift(shift.id);
        actionsDiv.appendChild(btnDel);
      }

      if (actionsDiv.children.length > 0) {
        card.appendChild(actionsDiv);
      }

      dayDiv.appendChild(card);
    });

    elements.calendarGrid.appendChild(dayDiv);
  }
}

elements.btnPrevWeek.addEventListener('click', () => {
  currentWeekStart.setDate(currentWeekStart.getDate() - 7);
  renderSchedule();
});

elements.btnNextWeek.addEventListener('click', () => {
  currentWeekStart.setDate(currentWeekStart.getDate() + 7);
  renderSchedule();
});

function populateUserSelect(selectEl, selectedUserId = null) {
  const room = rooms.find(r => getRoomKey(r) === currentRoomId);
  if (!room) return;

  const currentVal = selectedUserId || selectEl.value;
  selectEl.innerHTML = '';
  const members = Array.isArray(room.members) ? room.members : [];
  
  members.forEach(m => {
    const opt = document.createElement('option');
    opt.value = getUserId(m);
    opt.dataset.displayName = getUserDisplayName(m);
    opt.dataset.username = m.username || '';
    opt.textContent = `${getUserDisplayName(m)} (@${m.username})`;
    selectEl.appendChild(opt);
  });

  if (currentVal && members.some(m => getUserId(m) === currentVal)) {
    selectEl.value = currentVal;
  }
}

elements.btnAddShift.addEventListener('click', () => {
  populateUserSelect(elements.shiftUser);
  elements.addShiftForm.reset();
  elements.modalAddShift.classList.add('active');
});

elements.addShiftForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const selectedOpt = elements.shiftUser.options[elements.shiftUser.selectedIndex];
  const shift = {
    id: Date.now().toString(),
    userId: selectedOpt.value,
    displayName: selectedOpt.dataset.displayName,
    username: selectedOpt.dataset.username,
    date: elements.shiftDate.value,
    time: elements.shiftTime.value,
    repeat: elements.shiftRepeat.checked,
    status: 'assigned',
    tradeOffer: null
  };
  
  localData.roomState.shifts.push(shift);
  await pushRoomData();
  
  elements.modalAddShift.classList.remove('active');
  renderSchedule();
});

function openEditShiftModal(shift) {
  elements.editShiftId.value = shift.id;
  populateUserSelect(elements.editShiftUser, shift.userId);
  elements.editShiftDate.value = shift.date;
  elements.editShiftTime.value = shift.time;
  elements.editShiftRepeat.checked = !!shift.repeat;
  elements.modalEditShift.classList.add('active');
}

elements.editShiftForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const shiftId = elements.editShiftId.value;
  const shift = localData.roomState.shifts.find(s => s.id === shiftId);
  if (!shift) return;

  const selectedOpt = elements.editShiftUser.options[elements.editShiftUser.selectedIndex];
  shift.userId = selectedOpt.value;
  shift.displayName = selectedOpt.dataset.displayName;
  shift.username = selectedOpt.dataset.username;
  shift.date = elements.editShiftDate.value;
  shift.time = elements.editShiftTime.value;
  shift.repeat = elements.editShiftRepeat.checked;

  await pushRoomData();
  elements.modalEditShift.classList.remove('active');
  renderSchedule();
});

async function updateShiftStatus(shiftId, status) {
  const shift = localData.roomState.shifts.find(s => s.id === shiftId);
  if (!shift) return;
  shift.status = status;
  await pushRoomData();
  renderSchedule();
}

async function completeShift(shift) {
  const hoursStr = prompt(t('hoursPrompt'), '8.0');
  const duration = parseFloat(hoursStr);
  if (isNaN(duration) || duration <= 0) return;

  shift.status = 'completed';
  const log = {
    id: Date.now().toString(),
    userId: shift.userId,
    username: shift.username,
    displayName: shift.displayName,
    date: shift.date,
    duration: duration,
    notes: `Shift: ${shift.time}`,
    shiftId: shift.id
  };

  if (!Array.isArray(localData.roomState.timeLogs)) {
    localData.roomState.timeLogs = [];
  }
  localData.roomState.timeLogs.push(log);

  await pushRoomData();
  renderSchedule();
  renderEarnings();
}

function openTradeModal(shift) {
  activeTradeShiftId = shift.id;
  const room = rooms.find(r => getRoomKey(r) === currentRoomId);
  if (!room) return;

  elements.tradeShiftInfo.textContent = `${shift.date} (${shift.time})`;
  elements.tradeModeOpen.checked = true;
  elements.tradeDirectSelectContainer.classList.add('hidden');
  elements.tradeTargetUser.innerHTML = '';
  
  const activeUserId = getUserId(currentUser);
  const members = Array.isArray(room.members) ? room.members : [];
  members.filter(m => getUserId(m) !== activeUserId).forEach(m => {
    const opt = document.createElement('option');
    opt.value = getUserId(m);
    opt.dataset.displayName = getUserDisplayName(m);
    opt.textContent = `${getUserDisplayName(m)} (@${m.username})`;
    elements.tradeTargetUser.appendChild(opt);
  });

  elements.modalTradeShift.classList.add('active');
}

elements.tradeModeOpen.addEventListener('change', () => {
  elements.tradeDirectSelectContainer.classList.add('hidden');
});

elements.tradeModeDirect.addEventListener('change', () => {
  elements.tradeDirectSelectContainer.classList.remove('hidden');
});

elements.tradeShiftForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!activeTradeShiftId) return;
  
  const shift = localData.roomState.shifts.find(s => s.id === activeTradeShiftId);
  if (!shift) return;

  const isOpenTrade = elements.tradeModeOpen.checked;
  shift.status = 'offered';

  if (isOpenTrade) {
    shift.tradeOffer = {
      mode: 'open',
      fromUserId: getUserId(currentUser),
      fromDisplayName: getUserDisplayName(currentUser)
    };

    const sysMsg = {
      id: Date.now().toString(),
      type: 'trade_broadcast',
      shiftId: shift.id,
      shiftDate: shift.date,
      shiftTime: shift.time,
      ownerId: getUserId(currentUser),
      ownerDisplayName: getUserDisplayName(currentUser),
      author: 'System',
      text: `${getUserDisplayName(currentUser)} put their shift on ${shift.date} (${shift.time}) up for grabs!`,
      timestamp: new Date().toISOString()
    };
    localData.roomState.messages.push(sysMsg);
  } else {
    const targetOpt = elements.tradeTargetUser.options[elements.tradeTargetUser.selectedIndex];
    shift.tradeOffer = {
      mode: 'direct',
      fromUserId: getUserId(currentUser),
      fromDisplayName: getUserDisplayName(currentUser),
      toUserId: targetOpt.value,
      toDisplayName: targetOpt.dataset.displayName
    };
  }

  await pushRoomData();
  elements.modalTradeShift.classList.remove('active');
  activeTradeShiftId = null;
  renderSchedule();
  renderCompanyChat();
});

async function claimShift(shiftId) {
  const shift = localData.roomState.shifts.find(s => s.id === shiftId);
  if (!shift) return;

  const prevOwnerName = shift.displayName;
  shift.userId = getUserId(currentUser);
  shift.username = currentUser.username;
  shift.displayName = getUserDisplayName(currentUser);
  shift.tradeOffer = null;
  shift.status = 'confirmed';

  const claimMsg = {
    id: Date.now().toString(),
    userId: getUserId(currentUser),
    author: 'System',
    text: `${getUserDisplayName(currentUser)} accepted and claimed the shift from ${prevOwnerName} for ${shift.date} (${shift.time}).`,
    timestamp: new Date().toISOString()
  };
  localData.roomState.messages.push(claimMsg);

  await pushRoomData();
  renderSchedule();
  renderCompanyChat();
}

async function declineShiftTrade(shiftId) {
  const shift = localData.roomState.shifts.find(s => s.id === shiftId);
  if (!shift) return;

  shift.tradeOffer = null;
  shift.status = 'assigned';

  await pushRoomData();
  renderSchedule();
}

async function deleteShift(shiftId) {
  localData.roomState.shifts = localData.roomState.shifts.filter(s => s.id !== shiftId);
  await pushRoomData();
  renderSchedule();
}

elements.btnAddUnavailable.addEventListener('click', () => {
  elements.modalAddUnavailable.classList.add('active');
});

elements.addUnavailableForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const entry = {
    id: Date.now().toString(),
    userId: getUserId(currentUser),
    displayName: getUserDisplayName(currentUser),
    username: currentUser.username,
    date: elements.unavailableDate.value,
    reason: elements.unavailableReason.value.trim()
  };

  if (!Array.isArray(localData.roomState.unavailability)) {
    localData.roomState.unavailability = [];
  }
  localData.roomState.unavailability.push(entry);

  await pushRoomData();
  elements.modalAddUnavailable.classList.remove('active');
  elements.addUnavailableForm.reset();
  renderUnavailability();
  renderSchedule();
});

function renderUnavailability() {
  elements.myUnavailabilityList.innerHTML = '';
  elements.teamUnavailabilityList.innerHTML = '';

  const activeUserId = getUserId(currentUser);
  const unavails = localData.roomState.unavailability || [];

  unavails.slice().sort((a, b) => new Date(a.date) - new Date(b.date)).forEach(u => {
    const li = document.createElement('li');
    li.className = 'log-item';

    const meta = document.createElement('div');
    meta.className = 'log-item-meta';
    meta.innerHTML = `<strong>${u.displayName}</strong> on ${u.date}<br><span class="muted-note">${u.reason}</span>`;

    const actions = document.createElement('div');
    actions.className = 'log-item-actions';

    if (u.userId === activeUserId) {
      const btnDel = document.createElement('button');
      btnDel.className = 'btn-secondary';
      btnDel.textContent = t('deleteLogBtn');
      btnDel.onclick = () => deleteUnavailable(u.id);
      actions.appendChild(btnDel);
      li.appendChild(meta);
      li.appendChild(actions);
      elements.myUnavailabilityList.appendChild(li);
    } else {
      li.appendChild(meta);
      elements.teamUnavailabilityList.appendChild(li);
    }
  });
}

async function deleteUnavailable(id) {
  localData.roomState.unavailability = (localData.roomState.unavailability || []).filter(u => u.id !== id);
  await pushRoomData();
  renderUnavailability();
  renderSchedule();
}

function compressImage(file, maxWidth = 800, maxHeight = 800, quality = 0.7) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let { width, height } = img;
        if (width > height) {
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

elements.tabCompanyChat.addEventListener('click', () => {
  elements.tabCompanyChat.classList.add('active');
  elements.tabPrivateChat.classList.remove('active');
  elements.companyChatPanel.classList.add('active');
  elements.privateChatPanel.classList.remove('active');
});

elements.tabPrivateChat.addEventListener('click', () => {
  elements.tabPrivateChat.classList.add('active');
  elements.tabCompanyChat.classList.remove('active');
  elements.privateChatPanel.classList.add('active');
  elements.companyChatPanel.classList.remove('active');
  pullDmRooms();
});

function renderCompanyChat() {
  elements.companyChatMessages.innerHTML = '';
  const activeUserId = getUserId(currentUser);

  (localData.roomState.messages || []).forEach(msg => {
    const wrapper = document.createElement('div');

    if (msg.type === 'trade_broadcast') {
      wrapper.className = 'chat-msg system';
      const card = document.createElement('div');
      card.className = 'trade-broadcast-card';

      const cardHead = document.createElement('div');
      cardHead.className = 'trade-card-header';
      cardHead.innerHTML = `<strong>${t('tradeShiftBroadcastTitle')}</strong><span class="muted-note">${new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>`;
      card.appendChild(cardHead);

      const cardDetails = document.createElement('div');
      cardDetails.className = 'trade-card-details';
      cardDetails.textContent = `${msg.ownerDisplayName} is offering their shift on ${msg.shiftDate} (${msg.shiftTime}).`;
      card.appendChild(cardDetails);

      const cardActions = document.createElement('div');
      cardActions.className = 'trade-card-actions';

      const correspondingShift = localData.roomState.shifts.find(s => s.id === msg.shiftId);
      if (correspondingShift && correspondingShift.status === 'offered') {
        if (msg.ownerId !== activeUserId) {
          const btnTake = document.createElement('button');
          btnTake.className = 'btn-primary btn-sm';
          btnTake.textContent = t('takeShiftBtn');
          btnTake.onclick = () => claimShift(msg.shiftId);
          cardActions.appendChild(btnTake);
        }
      } else if (correspondingShift) {
        const claimedSpan = document.createElement('span');
        claimedSpan.className = 'claimed-badge';
        claimedSpan.textContent = `${t('shiftClaimedBy')} ${correspondingShift.displayName}`;
        cardActions.appendChild(claimedSpan);
      }

      card.appendChild(cardActions);
      wrapper.appendChild(card);
      elements.companyChatMessages.appendChild(wrapper);
      return;
    }

    const isSystem = msg.author === 'System';
    wrapper.className = `chat-msg ${msg.userId === activeUserId && !isSystem ? 'self' : ''} ${isSystem ? 'system' : ''}`;
    
    const author = document.createElement('span');
    author.className = 'msg-author';
    author.textContent = msg.author;
    
    const bubble = document.createElement('div');
    bubble.className = 'msg-bubble';
    bubble.textContent = msg.text;
    
    wrapper.appendChild(author);
    wrapper.appendChild(bubble);
    
    if (msg.image) {
      const img = document.createElement('img');
      img.src = msg.image;
      img.className = 'msg-image';
      bubble.appendChild(img);
    }
    
    elements.companyChatMessages.appendChild(wrapper);
  });
  elements.companyChatMessages.scrollTop = elements.companyChatMessages.scrollHeight;
}

elements.companyChatForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const text = elements.companyChatInput.value.trim();
  const file = elements.companyChatImage.files[0];
  if (!text && !file) return;

  const msg = {
    id: Date.now().toString(),
    userId: getUserId(currentUser),
    author: getUserDisplayName(currentUser),
    text: text,
    timestamp: new Date().toISOString()
  };

  if (file) {
    msg.image = await compressImage(file);
  }

  localData.roomState.messages.push(msg);
  await pushRoomData();
  elements.companyChatForm.reset();
  renderCompanyChat();
});

async function pullDmRooms() {
  try {
    const res = await apiCall(`/external/rooms?appId=${DM_APP_KEY}`);
    dmRooms = Array.isArray(res) ? res : (res && res.rooms) ? res.rooms : [];
    renderDmRoomsList();
  } catch (err) {
    dmRooms = [];
  }
}

function renderDmRoomsList() {
  elements.dmRoomsList.innerHTML = '';
  const activeUserId = getUserId(currentUser);

  dmRooms.forEach(room => {
    const roomId = getRoomKey(room);
    const otherMembers = (room.members || []).filter(m => getUserId(m) !== activeUserId);
    const title = otherMembers.length > 0 ? getUserDisplayName(otherMembers[0]) : room.name;

    const li = document.createElement('li');
    li.className = `dm-room-item ${roomId === activeDmRoomId ? 'active' : ''}`;
    li.textContent = title;
    li.onclick = () => selectDmRoom(roomId);
    elements.dmRoomsList.appendChild(li);
  });
}

async function selectDmRoom(roomId) {
  activeDmRoomId = roomId;
  renderDmRoomsList();
  
  const room = dmRooms.find(r => getRoomKey(r) === roomId);
  if (!room) return;

  const activeUserId = getUserId(currentUser);
  const otherMembers = (room.members || []).filter(m => getUserId(m) !== activeUserId);
  elements.dmActiveTitle.textContent = otherMembers.length > 0 ? getUserDisplayName(otherMembers[0]) : room.name;
  elements.dmChatForm.classList.remove('hidden');

  if (room.cases && room.cases.length > 0 && room.cases[0].blocks && room.cases[0].blocks[0]) {
    try {
      const parsed = JSON.parse(room.cases[0].blocks[0]);
      localData.activeDmState = { messages: Array.isArray(parsed.messages) ? parsed.messages : [] };
    } catch (e) {
      localData.activeDmState = { messages: [] };
    }
  } else {
    localData.activeDmState = { messages: [] };
  }

  renderDmMessages();
}

function renderDmMessages() {
  elements.dmChatMessages.innerHTML = '';
  const activeUserId = getUserId(currentUser);
  (localData.activeDmState.messages || []).forEach(msg => {
    const wrapper = document.createElement('div');
    wrapper.className = `chat-msg ${msg.userId === activeUserId ? 'self' : ''}`;
    
    const author = document.createElement('span');
    author.className = 'msg-author';
    author.textContent = msg.author;
    
    const bubble = document.createElement('div');
    bubble.className = 'msg-bubble';
    bubble.textContent = msg.text;
    
    wrapper.appendChild(author);
    wrapper.appendChild(bubble);
    
    if (msg.image) {
      const img = document.createElement('img');
      img.src = msg.image;
      img.className = 'msg-image';
      bubble.appendChild(img);
    }
    
    elements.dmChatMessages.appendChild(wrapper);
  });
  elements.dmChatMessages.scrollTop = elements.dmChatMessages.scrollHeight;
}

elements.dmChatForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!activeDmRoomId) return;

  const text = elements.dmChatInput.value.trim();
  const file = elements.dmChatImage.files[0];
  if (!text && !file) return;

  const msg = {
    id: Date.now().toString(),
    userId: getUserId(currentUser),
    author: getUserDisplayName(currentUser),
    text: text,
    timestamp: new Date().toISOString()
  };

  if (file) {
    msg.image = await compressImage(file);
  }

  localData.activeDmState.messages.push(msg);

  const room = dmRooms.find(r => getRoomKey(r) === activeDmRoomId);
  const cases = [{
    id: `dm_data_${activeDmRoomId}`,
    folderId: activeDmRoomId,
    title: 'DMState',
    blocks: [JSON.stringify(localData.activeDmState)]
  }];

  await apiCall(`/external/rooms/${activeDmRoomId}`, 'PUT', {
    name: room ? room.name : 'Direct Message',
    description: 'DM Conversation',
    cases
  });

  elements.dmChatForm.reset();
  renderDmMessages();
});

elements.btnNewDm.addEventListener('click', () => {
  const room = rooms.find(r => getRoomKey(r) === currentRoomId);
  if (!room) {
    alert('Please join or select a workspace first.');
    return;
  }

  elements.dmTargetUser.innerHTML = '';
  const activeUserId = getUserId(currentUser);
  const members = Array.isArray(room.members) ? room.members : [];
  members.filter(m => getUserId(m) !== activeUserId).forEach(m => {
    const opt = document.createElement('option');
    opt.value = m.username;
    opt.textContent = `${getUserDisplayName(m)} (@${m.username})`;
    elements.dmTargetUser.appendChild(opt);
  });

  elements.modalNewDm.classList.add('active');
});

elements.newDmForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const targetUsername = elements.dmTargetUser.value;
  try {
    const newRoom = await apiCall('/external/rooms', 'POST', {
      name: `DM: ${targetUsername}`,
      description: 'Direct Message',
      appId: DM_APP_KEY
    });
    const newRoomId = getRoomKey(newRoom) || (newRoom.room && getRoomKey(newRoom.room));
    await apiCall(`/external/rooms/${newRoomId}/members`, 'POST', { username: targetUsername });
    
    elements.modalNewDm.classList.remove('active');
    await pullDmRooms();
    selectDmRoom(newRoomId);
  } catch (err) {
    alert(err.message);
  }
});

function calculateEffectiveHourlyRate(rate, period) {
  const num = parseFloat(rate) || 0;
  if (period === 'weekly') return num / 40;
  if (period === 'monthly') return num / 160;
  if (period === 'yearly') return num / 2080;
  return num;
}

function getUserRateConfig(userId) {
  if (localData.roomState.userRates && localData.roomState.userRates[userId]) {
    return localData.roomState.userRates[userId];
  }
  if (userId === getUserId(currentUser)) {
    return {
      rate: localData.personal.rate || 0,
      period: localData.personal.period || 'hourly'
    };
  }
  return { rate: 0, period: 'hourly' };
}

elements.btnSaveRate.addEventListener('click', async () => {
  const activeUserId = getUserId(currentUser);
  const newRate = parseFloat(elements.payRateInput.value) || 0;
  const newPeriod = elements.payPeriodSelect.value;
  
  localData.personal.rate = newRate;
  localData.personal.period = newPeriod;
  await pushPersonalData();
  
  if (!localData.roomState.userRates) localData.roomState.userRates = {};
  localData.roomState.userRates[activeUserId] = { rate: newRate, period: newPeriod };
  await pushRoomData();
  
  renderEarnings();
});

elements.logHoursForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const activeUserId = getUserId(currentUser);
  const log = {
    id: Date.now().toString(),
    userId: activeUserId,
    username: currentUser.username,
    displayName: getUserDisplayName(currentUser),
    date: elements.logDate.value,
    duration: parseFloat(elements.logDuration.value) || 0,
    notes: elements.logNotes.value.trim()
  };
  
  if (!Array.isArray(localData.roomState.timeLogs)) {
    localData.roomState.timeLogs = [];
  }
  localData.roomState.timeLogs.push(log);
  
  await pushRoomData();
  elements.logHoursForm.reset();
  renderEarnings();
});

elements.hoursFilterSelect.addEventListener('change', () => {
  renderEarnings();
});

function renderEarnings() {
  const activeUserId = getUserId(currentUser);
  const myRateConfig = getUserRateConfig(activeUserId);
  
  elements.payRateInput.value = myRateConfig.rate || '';
  elements.payPeriodSelect.value = myRateConfig.period || 'hourly';
  
  const effectiveHourly = calculateEffectiveHourlyRate(myRateConfig.rate, myRateConfig.period);
  elements.effectiveRateDisplay.textContent = `${t('effectiveRateText')} $${effectiveHourly.toFixed(2)}/hr`;
  
  elements.hoursLogList.innerHTML = '';
  
  const allLogs = Array.isArray(localData.roomState.timeLogs) ? localData.roomState.timeLogs : [];
  const now = new Date();
  const weekStart = getMonday(now);
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  
  let myWeekHours = 0;
  let myMonthHours = 0;
  
  allLogs.forEach(log => {
    if (log.userId === activeUserId) {
      const d = new Date(log.date);
      if (d >= weekStart) myWeekHours += log.duration;
      if (d >= monthStart) myMonthHours += log.duration;
    }
  });
  
  elements.weekHours.textContent = `${myWeekHours} hrs`;
  elements.weekEarnings.textContent = `$${(myWeekHours * effectiveHourly).toFixed(2)}`;
  
  elements.monthHours.textContent = `${myMonthHours} hrs`;
  elements.monthEarnings.textContent = `$${(myMonthHours * effectiveHourly).toFixed(2)}`;
  
  const filter = elements.hoursFilterSelect.value;
  const filteredLogs = filter === 'mine' ? allLogs.filter(l => l.userId === activeUserId) : allLogs;
  
  const room = rooms.find(r => getRoomKey(r) === currentRoomId);
  const amAdmin = room ? isUserAdmin(room, activeUserId) : false;
  
  filteredLogs.slice().sort((a, b) => new Date(b.date) - new Date(a.date)).forEach(log => {
    const li = document.createElement('li');
    li.className = 'log-item';
    
    const meta = document.createElement('div');
    meta.className = 'log-item-meta';
    
    const title = document.createElement('span');
    title.innerHTML = `<strong>${log.displayName}</strong> on ${log.date}`;
    
    const duration = document.createElement('span');
    duration.className = 'muted-note';
    duration.textContent = `${log.duration} hrs ${log.notes ? `(${log.notes})` : ''}`;
    
    meta.appendChild(title);
    meta.appendChild(duration);
    
    const actions = document.createElement('div');
    actions.className = 'log-item-actions';
    
    if (log.userId === activeUserId || amAdmin) {
      const btnDel = document.createElement('button');
      btnDel.className = 'btn-secondary';
      btnDel.textContent = t('deleteLogBtn');
      btnDel.onclick = () => deleteWorkLog(log.id);
      actions.appendChild(btnDel);
    }
    
    li.appendChild(meta);
    li.appendChild(actions);
    elements.hoursLogList.appendChild(li);
  });
}

async function deleteWorkLog(logId) {
  localData.roomState.timeLogs = (localData.roomState.timeLogs || []).filter(l => l.id !== logId);
  await pushRoomData();
  renderEarnings();
}

elements.btnCalcSince.addEventListener('click', () => {
  const startDateStr = elements.queryStartDate.value;
  if (!startDateStr) return;
  const startDate = new Date(startDateStr);
  const activeUserId = getUserId(currentUser);
  const myRateConfig = getUserRateConfig(activeUserId);
  const effectiveHourly = calculateEffectiveHourlyRate(myRateConfig.rate, myRateConfig.period);

  let totalHrs = 0;
  (localData.roomState.timeLogs || []).forEach(log => {
    if (log.userId === activeUserId && new Date(log.date) >= startDate) {
      totalHrs += log.duration;
    }
  });

  const totalEarnings = (totalHrs * effectiveHourly).toFixed(2);
  elements.calcSinceResult.textContent = `${totalHrs} hrs = $${totalEarnings}`;
});

elements.btnCalcWeek.addEventListener('click', () => {
  const chosenDateStr = elements.querySpecificWeek.value;
  if (!chosenDateStr) return;
  const targetMonday = getMonday(new Date(chosenDateStr));
  const targetSunday = new Date(targetMonday);
  targetSunday.setDate(targetMonday.getDate() + 6);
  targetSunday.setHours(23, 59, 59, 999);

  const activeUserId = getUserId(currentUser);
  const myRateConfig = getUserRateConfig(activeUserId);
  const effectiveHourly = calculateEffectiveHourlyRate(myRateConfig.rate, myRateConfig.period);

  let totalHrs = 0;
  (localData.roomState.timeLogs || []).forEach(log => {
    if (log.userId === activeUserId) {
      const logD = new Date(log.date);
      if (logD >= targetMonday && logD <= targetSunday) {
        totalHrs += log.duration;
      }
    }
  });

  const totalEarnings = (totalHrs * effectiveHourly).toFixed(2);
  elements.calcWeekResult.textContent = `${totalHrs} hrs = $${totalEarnings}`;
});

function renderSettings(room) {
  elements.memberList.innerHTML = '';
  elements.readonlyMemberList.innerHTML = '';
  
  const roomId = getRoomKey(room);
  const activeUserId = getUserId(currentUser);
  const amAdmin = isUserAdmin(room, activeUserId);
  const members = Array.isArray(room.members) ? room.members : [];
  const admins = getRoomAdmins(room);

  members.forEach(m => {
    const memberId = getUserId(m);
    const mIsAdmin = admins.includes(memberId);
    
    const li = document.createElement('li');
    li.className = 'log-item';
    
    const info = document.createElement('div');
    info.className = 'member-info-block';
    
    const badge = document.createElement('span');
    badge.className = `role-badge ${mIsAdmin ? 'admin' : ''}`;
    badge.textContent = mIsAdmin ? t('roleAdmin') : t('roleMember');
    
    const nameSpan = document.createElement('span');
    nameSpan.textContent = `${getUserDisplayName(m)} (@${m.username})`;
    
    info.appendChild(badge);
    info.appendChild(nameSpan);
    li.appendChild(info);

    if (amAdmin) {
      const controls = document.createElement('div');
      controls.className = 'member-admin-controls';
      
      const toggleAdminBtn = document.createElement('button');
      toggleAdminBtn.className = 'btn-secondary';
      toggleAdminBtn.textContent = mIsAdmin ? t('revokeAdmin') : t('makeAdmin');
      toggleAdminBtn.onclick = () => toggleMemberAdmin(room, memberId);
      controls.appendChild(toggleAdminBtn);
      
      if (memberId !== activeUserId) {
        const removeBtn = document.createElement('button');
        removeBtn.className = 'btn-secondary';
        removeBtn.textContent = t('removeMemberBtn');
        removeBtn.onclick = () => removeMember(roomId, memberId);
        controls.appendChild(removeBtn);
      }
      
      li.appendChild(controls);
      elements.memberList.appendChild(li);
    } else {
      elements.readonlyMemberList.appendChild(li);
    }
  });
}

async function toggleMemberAdmin(room, targetUserId) {
  const admins = getRoomAdmins(room);
  const isTargetAdmin = admins.includes(targetUserId);

  if (isTargetAdmin) {
    if (admins.length <= 1) {
      alert(t('adminMinWarning'));
      return;
    }
    localData.roomState.admins = admins.filter(id => id !== targetUserId);
  } else {
    localData.roomState.admins = [...admins, targetUserId];
  }

  await pushRoomData();
  selectRoom(getRoomKey(room));
}

elements.inviteForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = elements.inviteUsername.value.trim();
  if (!currentRoomId) return;
  try {
    await apiCall(`/external/rooms/${currentRoomId}/members`, 'POST', { username });
    elements.inviteUsername.value = '';
    await pullRooms();
    selectRoom(currentRoomId);
  } catch (err) {
    alert(err.message);
  }
});

async function removeMember(roomId, userId) {
  const room = rooms.find(r => getRoomKey(r) === roomId);
  if (room && isUserAdmin(room, userId)) {
    const admins = getRoomAdmins(room);
    if (admins.length <= 1) {
      alert(t('adminSoleDeleteWarning'));
      return;
    }
    localData.roomState.admins = admins.filter(id => id !== userId);
  }

  try {
    await apiCall(`/external/rooms/${roomId}/members/${userId}`, 'DELETE');
    await pushRoomData();
    await pullRooms();
    selectRoom(currentRoomId);
  } catch (err) {
    alert(err.message);
  }
}

function renderEmptyState() {
  elements.calendarGrid.innerHTML = '<div style="padding: 2rem; grid-column: 1 / -1; text-align: center; color: var(--text-muted);">No workspace selected. Create or join one.</div>';
  elements.companyChatMessages.innerHTML = '';
  elements.scheduleRoleBadge.textContent = '';
  elements.btnAddShift.classList.add('hidden');
}

if (authToken) {
  initializeApp();
}