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
    teamMembers: 'Team Members',
    selectMemberToChat: 'Select a member to chat',
    attachImage: 'Image',
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
    calculateCustomRange: 'Calculate for custom date range:',
    rangeTo: 'to',
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
    noUnavailableDates: 'No unavailable dates registered.',
    conflictShiftBadge: 'Shift Conflict',
    hasShiftOnDate: 'Scheduled shift:',
    noShiftOnDate: 'No shifts scheduled on this date',
    workspaceSettings: 'Workspace Settings',
    languageSettings: 'Application Language',
    selectLanguage: 'Select language:',
    inviteMember: 'Invite Member',
    invite: 'Invite',
    membersPermissions: 'Workspace Members & Permissions',
    workspaceMembers: 'Workspace Members',
    notInWorkspace: 'You are not a member of this workspace.',
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
    roleAdmin: 'Admin',
    roleMember: 'Member',
    shiftDetails: 'Shift Details',
    manageShift: 'Manage',
    assignedToLabel: 'Assigned to',
    shiftDateLabel: 'Date',
    shiftTimeLabel: 'Time',
    shiftStatusLabel: 'Status',
    shiftStatusAssigned: 'Assigned',
    shiftStatusConfirmed: 'Attending',
    shiftStatusNotNeeded: 'You Don\'t Have to Come',
    shiftStatusOffered: 'Trade Offered',
    shiftStatusCompleted: 'Finished',
    confirmAttendance: 'Confirm Attendance',
    btnNoWork: 'You Don\'t Have to Come',
    btnUndoNoWork: 'Reinstate Shift',
    offerTrade: 'Trade Shift',
    markFinished: 'Mark Finished',
    unfinishShiftBtn: 'Mark as Unfinished',
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
    tradeDirectOfferTitle: 'Shift Trade Offer',
    shiftClaimedBy: 'Claimed by',
    tradeExpired: 'Trade closed / inactive',
    systemClaimMessage: '{claimer} accepted and claimed the shift from {owner} for {date} ({time}).',
    systemDeclineMessage: '{decliner} declined the shift trade offer for {date} ({time}).',
    systemTradeBroadcast: '{owner} is offering their shift on {date} ({time}) for anyone to take.',
    systemTradeDirect: '{owner} offered their shift on {date} ({time}) to {target}.',
    placeholderUsernameOrEmail: 'Username or Email',
    placeholderPassword: 'Password',
    placeholderCode: 'Enter 6-digit code',
    typeMessage: 'Type a message...',
    typePrivateMessage: 'Type a private message...',
    notesOptional: 'Notes (optional)',
    reasonPlaceholder: 'Reason (e.g. Vacation, Medical)',
    workspaceNamePlaceholder: 'Workspace Name',
    descriptionPlaceholder: 'Description',
    usernamePlaceholder: 'Username',
    hoursUnit: 'hrs',
    daysList: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    selectWorkspaceFirst: 'Please select or create a workspace first.'
  },
  nl: {
    signIn: 'Inloggen',
    login: 'Inloggen',
    forgotPassword: 'Wachtwoord vergeten?',
    needAccount: 'Nog geen account?',
    registerHere: 'Registreer hier',
    twoFactorAuth: 'Tweeledige verificatie',
    twoFactorInstructions: 'Voer de 6-cijferige verificatiecode in die naar je e-mailadres is verzonden.',
    verifyCode: 'Code verifiëren',
    backToLogin: 'Terug naar inloggen',
    navSchedule: 'Rooster',
    navChat: 'Chat & Berichten',
    navEarnings: 'Uren & Inkomsten',
    navUnavailability: 'Niet beschikbaar',
    navSettings: 'Instellingen',
    logout: 'Uitloggen',
    weeklySchedule: 'Weekrooster',
    addShift: 'Dienst toevoegen',
    editShift: 'Dienst bewerken',
    prevWeek: 'Vorige week',
    nextWeek: 'Volgende week',
    communicationHub: 'Communicatiehub',
    companyChat: 'Bedrijfschat',
    directMessages: 'Privéberichten',
    send: 'Versturen',
    teamMembers: 'Teamleden',
    selectMemberToChat: 'Selecteer een teamlid om te chatten',
    attachImage: 'Afbeelding',
    timeEarningsTracker: 'Uren- en inkomstenregistratie',
    payRateConfig: 'Salaris en uitbetalingsperiode',
    hourly: 'Per uur',
    weekly: 'Per week',
    monthly: 'Per maand',
    yearly: 'Per jaar',
    saveRate: 'Tarief opslaan',
    thisCurrentWeek: 'Deze week',
    thisCurrentMonth: 'Deze maand',
    customCalculations: 'Aangepaste berekeningen',
    calculateEarningsSince: 'Bereken inkomsten vanaf startdatum:',
    calculateSpecificWeek: 'Bereken voor een specifieke week:',
    calculateCustomRange: 'Bereken voor aangepast datumbereik:',
    rangeTo: 'tot',
    calculate: 'Berekenen',
    workHoursLog: 'Geregistreerde werkuren',
    displayLabel: 'Weergave:',
    myLoggedHours: 'Mijn gewerkte uren',
    teamLoggedHours: 'Werkuren van het hele team',
    logTime: 'Uren registreren',
    unavailabilityTitle: 'Niet-beschikbare dagen & verlof',
    setUnavailable: 'Afwezigheid opgeven',
    myUnavailableDays: 'Mijn opgegeven afwezigheden',
    teamUnavailableDays: 'Afwezigheden van het team',
    noUnavailableDates: 'Geen afwezigheden geregistreerd.',
    conflictShiftBadge: 'Dienstconflict',
    hasShiftOnDate: 'Ingeplande dienst:',
    noShiftOnDate: 'Geen diensten ingepland op deze datum',
    workspaceSettings: 'Werkplekinstellingen',
    languageSettings: 'Taalinstellingen',
    selectLanguage: 'Kies taal:',
    inviteMember: 'Lid uitnodigen',
    invite: 'Uitnodigen',
    membersPermissions: 'Leden & Beheerdersrechten',
    workspaceMembers: 'Leden van deze werkplek',
    notInWorkspace: 'Je bent geen lid van deze werkplek.',
    createNewWorkspace: 'Nieuwe werkplek aanmaken',
    cancel: 'Annuleren',
    create: 'Aanmaken',
    assignShift: 'Dienst toewijzen',
    repeatWeekly: 'Wekelijks herhalen',
    assign: 'Toewijzen',
    save: 'Opslaan',
    markUnavailableDate: 'Niet-beschikbare datum opslaan',
    tradeShiftTitle: 'Dienst aanbieden / ruilen',
    postToTeamChat: 'In bedrijfschat plaatsen (iedereen kan overnemen)',
    offerToSpecificMember: 'Aanbieden aan een specifiek lid',
    offerToMember: 'Selecteer lid:',
    sendTradeOffer: 'Aanbod versturen',
    roleAdmin: 'Beheerder',
    roleMember: 'Medewerker',
    shiftDetails: 'Dienstdetails',
    manageShift: 'Beheren',
    assignedToLabel: 'Toegewezen aan',
    shiftDateLabel: 'Datum',
    shiftTimeLabel: 'Tijd',
    shiftStatusLabel: 'Status',
    shiftStatusAssigned: 'Ingepland',
    shiftStatusConfirmed: 'Aanwezig',
    shiftStatusNotNeeded: 'Je hoeft niet te komen',
    shiftStatusOffered: 'Ter overname aangeboden',
    shiftStatusCompleted: 'Gewerkt',
    confirmAttendance: 'Aanwezigheid bevestigen',
    btnNoWork: 'Je hoeft niet te komen',
    btnUndoNoWork: 'Dienst herstellen',
    offerTrade: 'Dienst ruilen',
    markFinished: 'Afronden als gewerkt',
    unfinishShiftBtn: 'Markeer als niet afgerond',
    takeShiftBtn: 'Dienst overnemen',
    acceptTrade: 'Ruil accepteren',
    declineTrade: 'Ruil weigeren',
    deleteShift: 'Dienst verwijderen',
    editShiftBtn: 'Bewerken',
    makeAdmin: 'Beheerder maken',
    revokeAdmin: 'Beheerder intrekken',
    removeMemberBtn: 'Verwijderen',
    deleteLogBtn: 'Verwijderen',
    hoursPrompt: 'Voer het aantal gewerkte uren in:',
    adminMinWarning: 'Kan beheerdersrol niet intrekken. Er moet minimaal 1 beheerder overblijven.',
    adminSoleDeleteWarning: 'Dit lid kan niet verwijderd worden omdat dit de enige beheerder is.',
    unavailableTag: 'Niet beschikbaar',
    effectiveRateText: 'Effectief uurtarief:',
    tradeShiftBroadcastTitle: 'Dienst ter overname',
    tradeDirectOfferTitle: 'Directe dienstovername aangeboden',
    shiftClaimedBy: 'Overgenomen door',
    tradeExpired: 'Ruilaanbod gesloten / niet meer actief',
    systemClaimMessage: '{claimer} heeft de dienst van {owner} voor {date} ({time}) overgenomen.',
    systemDeclineMessage: '{decliner} heeft het ruilaanbod voor {date} ({time}) geweigerd.',
    systemTradeBroadcast: '{owner} biedt de dienst op {date} ({time}) aan ter overname voor iedereen.',
    systemTradeDirect: '{owner} heeft de dienst op {date} ({time}) aangeboden aan {target}.',
    placeholderUsernameOrEmail: 'Gebruikersnaam of e-mail',
    placeholderPassword: 'Wachtwoord',
    placeholderCode: 'Voer 6-cijferige code in',
    typeMessage: 'Typ een bericht...',
    typePrivateMessage: 'Typ een privébericht...',
    notesOptional: 'Notities (optioneel)',
    reasonPlaceholder: 'Reden (bijv. Vakantie, Ziekte)',
    workspaceNamePlaceholder: 'Naam van werkplek',
    descriptionPlaceholder: 'Omschrijving',
    usernamePlaceholder: 'Gebruikersnaam',
    hoursUnit: 'uur',
    daysList: ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'],
    selectWorkspaceFirst: 'Selecteer of maak eerst een werkplek aan.'
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
    prevWeek: 'Vorige Woche',
    nextWeek: 'Nächste Woche',
    communicationHub: 'Kommunikationszentrale',
    companyChat: 'Team-Chat',
    directMessages: 'Direktnachrichten',
    send: 'Senden',
    teamMembers: 'Teammitglieder',
    selectMemberToChat: 'Mitglied zum Chatten auswählen',
    attachImage: 'Bild',
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
    calculateCustomRange: 'Berechnen für benutzerdefinierten Zeitraum:',
    rangeTo: 'bis',
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
    noUnavailableDates: 'Keine Abwesenheiten eingetragen.',
    conflictShiftBadge: 'Schichtkonflikt',
    hasShiftOnDate: 'Geplante Schicht:',
    noShiftOnDate: 'Keine Schichten für dieses Datum geplant',
    workspaceSettings: 'Arbeitsbereich-Einstellungen',
    languageSettings: 'Spracheinstellungen',
    selectLanguage: 'Sprache wählen:',
    inviteMember: 'Mitglied einladen',
    invite: 'Einladen',
    membersPermissions: 'Mitglieder & Berechtigungen',
    workspaceMembers: 'Mitglieder',
    notInWorkspace: 'Sie sind kein Mitglied dieses Arbeitsbereichs.',
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
    roleAdmin: 'Administrator',
    roleMember: 'Mitarbeiter',
    shiftDetails: 'Schichtdetails',
    manageShift: 'Verwalten',
    assignedToLabel: 'Zugewiesen an',
    shiftDateLabel: 'Datum',
    shiftTimeLabel: 'Zeit',
    shiftStatusLabel: 'Status',
    shiftStatusAssigned: 'Eingeteilt',
    shiftStatusConfirmed: 'Bestätigt',
    shiftStatusNotNeeded: 'Du musst nicht kommen',
    shiftStatusOffered: 'Angeboten',
    shiftStatusCompleted: 'Abgeschlossen',
    confirmAttendance: 'Teilnahme bestätigen',
    btnNoWork: 'Du musst nicht kommen',
    btnUndoNoWork: 'Wieder aktivieren',
    offerTrade: 'Schicht tauschen',
    markFinished: 'Abschließen',
    unfinishShiftBtn: 'Als nicht abgeschlossen markieren',
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
    tradeDirectOfferTitle: 'Direktes Schichtangebot',
    shiftClaimedBy: 'Übernommen von',
    tradeExpired: 'Tauschangebot geschlossen / inaktiv',
    systemClaimMessage: '{claimer} hat die Schicht von {owner} für {date} ({time}) übernommen.',
    systemDeclineMessage: '{decliner} hat das Schichtangebot für {date} ({time}) abgelehnt.',
    systemTradeBroadcast: '{owner} bietet die Schicht am {date} ({time}) zur Übernahme an.',
    systemTradeDirect: '{owner} hat die Schicht am {date} ({time}) an {target} angeboten.',
    placeholderUsernameOrEmail: 'Benutzername oder E-Mail',
    placeholderPassword: 'Passwort',
    placeholderCode: '6-stelligen Code eingeben',
    typeMessage: 'Nachricht schreiben...',
    typePrivateMessage: 'Privatnachricht schreiben...',
    notesOptional: 'Notizen (optional)',
    reasonPlaceholder: 'Grund (z. B. Urlaub, Krank)',
    workspaceNamePlaceholder: 'Name des Arbeitsbereichs',
    descriptionPlaceholder: 'Beschreibung',
    usernamePlaceholder: 'Benutzername',
    hoursUnit: 'Std.',
    daysList: ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'],
    selectWorkspaceFirst: 'Bitte wählen oder erstellen Sie zuerst einen Arbeitsbereich.'
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
    prevWeek: 'Semana anterior',
    nextWeek: 'Semana siguiente',
    communicationHub: 'Centro de Comunicación',
    companyChat: 'Chat de Trabajo',
    directMessages: 'Mensajes Directos',
    send: 'Enviar',
    teamMembers: 'Miembros del equipo',
    selectMemberToChat: 'Seleccione un miembro para chatear',
    attachImage: 'Imagen',
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
    calculateCustomRange: 'Calcular para rango personalizado:',
    rangeTo: 'hasta',
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
    noUnavailableDates: 'No hay fechas no disponibles registradas.',
    conflictShiftBadge: 'Conflicto de turno',
    hasShiftOnDate: 'Turno programado:',
    noShiftOnDate: 'Sin turnos programados en esta fecha',
    workspaceSettings: 'Configuración del Espacio de Trabajo',
    languageSettings: 'Idioma de la aplicación',
    selectLanguage: 'Seleccionar idioma:',
    inviteMember: 'Invitar miembro',
    invite: 'Invitar',
    membersPermissions: 'Miembros y Permisos',
    workspaceMembers: 'Miembros del espacio',
    notInWorkspace: 'No eres miembro de este espacio de trabajo.',
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
    roleAdmin: 'Administrador',
    roleMember: 'Miembro',
    shiftDetails: 'Detalles del turno',
    manageShift: 'Gestionar',
    assignedToLabel: 'Asignado a',
    shiftDateLabel: 'Fecha',
    shiftTimeLabel: 'Horario',
    shiftStatusLabel: 'Estado',
    shiftStatusAssigned: 'Asignado',
    shiftStatusConfirmed: 'Confirmado',
    shiftStatusNotNeeded: 'No tienes que venir',
    shiftStatusOffered: 'Ofrecido',
    shiftStatusCompleted: 'Finalizado',
    confirmAttendance: 'Confirmar asistencia',
    btnNoWork: 'No tienes que venir',
    btnUndoNoWork: 'Reactivar turno',
    offerTrade: 'Cambiar turno',
    markFinished: 'Finalizar',
    unfinishShiftBtn: 'Marcar como no finalizado',
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
    tradeDirectOfferTitle: 'Oferta directa de cambio de turno',
    shiftClaimedBy: 'Tomado por',
    tradeExpired: 'Oferta cerrada / inactiva',
    systemClaimMessage: '{claimer} aceptó y tomó el turno de {owner} para el {date} ({time}).',
    systemDeclineMessage: '{decliner} rechazó la oferta de cambio para el {date} ({time}).',
    systemTradeBroadcast: '{owner} ofrece su turno del {date} ({time}) para quien quiera tomarlo.',
    systemTradeDirect: '{owner} ofreció su turno del {date} ({time}) a {target}.',
    placeholderUsernameOrEmail: 'Usuario o correo electrónico',
    placeholderPassword: 'Contraseña',
    placeholderCode: 'Código de 6 dígitos',
    typeMessage: 'Escribe un mensaje...',
    typePrivateMessage: 'Escribe un mensaje privado...',
    notesOptional: 'Notas (opcional)',
    reasonPlaceholder: 'Motivo (ej. Vacaciones, Médico)',
    workspaceNamePlaceholder: 'Nombre del espacio',
    descriptionPlaceholder: 'Descripción',
    usernamePlaceholder: 'Nombre de usuario',
    hoursUnit: 'hs',
    daysList: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    selectWorkspaceFirst: 'Por favor seleccione o cree un espacio primero.'
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
    prevWeek: 'Semaine précédente',
    nextWeek: 'Semaine suivante',
    communicationHub: 'Hub de Communication',
    companyChat: 'Chat d\'Équipe',
    directMessages: 'Messages Privés',
    send: 'Envoyer',
    teamMembers: 'Membres de l\'équipe',
    selectMemberToChat: 'Sélectionner un membre pour discuter',
    attachImage: 'Image',
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
    calculateCustomRange: 'Calculer pour une période personnalisée :',
    rangeTo: 'à',
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
    noUnavailableDates: 'Aucune indisponibilité enregistrée.',
    conflictShiftBadge: 'Conflit de quart',
    hasShiftOnDate: 'Quart planifié :',
    noShiftOnDate: 'Aucun quart planifié à cette date',
    workspaceSettings: 'Paramètres de l\'Espace',
    languageSettings: 'Paramètres de langue',
    selectLanguage: 'Sélectionner la langue :',
    inviteMember: 'Inviter un membre',
    invite: 'Inviter',
    membersPermissions: 'Membres et Permissions',
    workspaceMembers: 'Membres de l\'espace',
    notInWorkspace: 'Vous n\'êtes pas membre de cet espace.',
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
    roleAdmin: 'Administrateur',
    roleMember: 'Membre',
    shiftDetails: 'Détails du quart',
    manageShift: 'Gérer',
    assignedToLabel: 'Attribué à',
    shiftDateLabel: 'Date',
    shiftTimeLabel: 'Heure',
    shiftStatusLabel: 'Statut',
    shiftStatusAssigned: 'Planifié',
    shiftStatusConfirmed: 'Présent',
    shiftStatusNotNeeded: 'Tu n\'as pas besoin de venir',
    shiftStatusOffered: 'Échange proposé',
    shiftStatusCompleted: 'Terminé',
    confirmAttendance: 'Confirmer présence',
    btnNoWork: 'Tu n\'as pas besoin de venir',
    btnUndoNoWork: 'Rétablir le quart',
    offerTrade: 'Échanger le quart',
    markFinished: 'Terminer le quart',
    unfinishShiftBtn: 'Marquer comme non terminé',
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
    tradeDirectOfferTitle: 'Offre directe d\'échange de quart',
    shiftClaimedBy: 'Pris par',
    tradeExpired: 'Offre clôturée / inactive',
    systemClaimMessage: '{claimer} a accepté et pris le quart de {owner} pour le {date} ({time}).',
    systemDeclineMessage: '{decliner} a refusé l\'offre d\'échange pour le {date} ({time}).',
    systemTradeBroadcast: '{owner} propose son quart du {date} ({time}) à qui veut le prendre.',
    systemTradeDirect: '{owner} a proposé son quart du {date} ({time}) à {target}.',
    placeholderUsernameOrEmail: 'Nom d\'utilisateur ou e-mail',
    placeholderPassword: 'Mot de passe',
    placeholderCode: 'Code à 6 chiffres',
    typeMessage: 'Écrire un message...',
    typePrivateMessage: 'Écrire un message privé...',
    notesOptional: 'Notes (facultatif)',
    reasonPlaceholder: 'Motif (ex. Congé, Maladie)',
    workspaceNamePlaceholder: 'Nom de l\'espace',
    descriptionPlaceholder: 'Description',
    usernamePlaceholder: 'Nom d\'utilisateur',
    hoursUnit: 'h',
    daysList: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
    selectWorkspaceFirst: 'Veuillez d\'abord sélectionner ou créer un espace.'
  }
};

let currentLang = 'en';

function t(key, vars = {}) {
  let str = (i18n[currentLang] && i18n[currentLang][key]) || (i18n.en && i18n.en[key]) || key;
  if (typeof str === 'string') {
    Object.keys(vars).forEach(v => {
      str = str.replace(new RegExp(`\\{${v}\\}`, 'g'), vars[v]);
    });
  }
  return str;
}

function applyLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key && i18n[lang] && i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key && i18n[lang] && i18n[lang][key]) {
      el.setAttribute('placeholder', i18n[lang][key]);
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
let activeDmTargetUserId = null;
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
  companyFileIndicator: document.getElementById('company-file-indicator'),
  
  dmMembersList: document.getElementById('dm-members-list'),
  dmActiveHeader: document.getElementById('dm-active-header'),
  dmActiveTitle: document.getElementById('dm-active-title'),
  dmChatMessages: document.getElementById('dm-chat-messages'),
  dmChatForm: document.getElementById('dm-chat-form'),
  dmChatInput: document.getElementById('dm-chat-input'),
  dmChatImage: document.getElementById('dm-chat-image'),
  dmFileIndicator: document.getElementById('dm-file-indicator'),
  
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
  queryRangeStart: document.getElementById('query-range-start'),
  queryRangeEnd: document.getElementById('query-range-end'),
  btnCalcRange: document.getElementById('btn-calc-range'),
  calcRangeResult: document.getElementById('calc-range-result'),
  
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
  
  modalShiftDetails: document.getElementById('modal-shift-details'),
  shiftDetailInfo: document.getElementById('shift-detail-info'),
  shiftModalActions: document.getElementById('shift-modal-actions'),
  
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

function scrollToBottom(container) {
  if (!container) return;
  requestAnimationFrame(() => {
    container.scrollTop = container.scrollHeight;
  });
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
  activeDmTargetUserId = null;
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
  if (room && isUserInRoom(room, getUserId(currentUser))) {
    updateRoleUI(room);
    renderSchedule();
    renderCompanyChat();
    renderEarnings();
    renderUnavailability();
    renderSettings(room);
    renderDmMembersList();
    if (activeDmRoomId) renderDmMessages();
  } else {
    renderEmptyState();
  }
});

function isUserInRoom(room, userId) {
  if (!room || !userId) return false;
  const hostId = room.hostId || room.ownerId || room.userId || (room.host && getUserId(room.host));
  if (hostId === userId) return true;
  const members = Array.isArray(room.members) ? room.members : [];
  return members.some(m => getUserId(m) === userId);
}

async function pullRooms() {
  try {
    const res = await apiCall(`/external/rooms?appId=${APP_KEY}`);
    const rawRooms = Array.isArray(res) ? res : (res && res.rooms) ? res.rooms : [];
    const activeUserId = getUserId(currentUser);
    rooms = rawRooms.filter(r => isUserInRoom(r, activeUserId));

    elements.workspaceSelect.innerHTML = '';
    rooms.forEach(room => {
      const id = getRoomKey(room);
      const opt = document.createElement('option');
      opt.value = id;
      opt.textContent = room.name;
      elements.workspaceSelect.appendChild(opt);
    });

    if (currentRoomId && rooms.some(r => getRoomKey(r) === currentRoomId)) {
      elements.workspaceSelect.value = currentRoomId;
    } else if (rooms.length > 0) {
      currentRoomId = getRoomKey(rooms[0]);
      elements.workspaceSelect.value = currentRoomId;
    } else {
      currentRoomId = null;
    }
  } catch (err) {
    rooms = [];
    currentRoomId = null;
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
  if (!roomId) {
    renderEmptyState();
    return;
  }

  const room = rooms.find(r => getRoomKey(r) === roomId);
  const activeUserId = getUserId(currentUser);
  if (!room || !isUserInRoom(room, activeUserId)) {
    currentRoomId = null;
    renderEmptyState();
    return;
  }

  currentRoomId = roomId;
  elements.workspaceSelect.value = roomId;

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
  renderDmMembersList();
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
    if (target === 'chat-view') {
      scrollToBottom(elements.companyChatMessages);
      scrollToBottom(elements.dmChatMessages);
    }
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
    elements.modalShiftDetails.classList.remove('active');
    elements.modalAddUnavailable.classList.remove('active');
    elements.modalTradeShift.classList.remove('active');
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
  const days = t('daysList') || ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
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
      card.className = `shift-card ${shift.status}`;
      
      const cardHeader = document.createElement('div');
      cardHeader.className = 'shift-card-header';

      const nameSpan = document.createElement('span');
      nameSpan.className = 'shift-card-name';
      nameSpan.textContent = shift.displayName;

      const timeSpan = document.createElement('span');
      timeSpan.className = 'shift-card-time';
      timeSpan.textContent = shift.time;

      const statusBadge = document.createElement('span');
      const statusKey = shift.status === 'confirmed' ? 'shiftStatusConfirmed' :
                        shift.status === 'not_needed' ? 'shiftStatusNotNeeded' :
                        shift.status === 'offered' ? 'shiftStatusOffered' :
                        shift.status === 'completed' ? 'shiftStatusCompleted' : 'shiftStatusAssigned';
      statusBadge.className = `status-badge ${shift.status}`;
      statusBadge.textContent = t(statusKey);

      cardHeader.appendChild(nameSpan);
      cardHeader.appendChild(timeSpan);
      cardHeader.appendChild(statusBadge);
      card.appendChild(cardHeader);

      const actionsDiv = document.createElement('div');
      actionsDiv.className = 'shift-card-actions';

      const isMyShift = shift.userId === activeUserId;
      const isOpenOffer = shift.status === 'offered' && shift.tradeOffer && shift.tradeOffer.mode === 'open';
      const isDirectOfferToMe = shift.status === 'offered' && shift.tradeOffer && shift.tradeOffer.toUserId === activeUserId;

      if (!isMyShift && (isOpenOffer || isDirectOfferToMe)) {
        const btnTake = document.createElement('button');
        btnTake.className = 'btn-primary btn-sm';
        btnTake.textContent = t('takeShiftBtn');
        btnTake.onclick = (e) => {
          e.stopPropagation();
          claimShift(shift.id);
        };
        actionsDiv.appendChild(btnTake);

        if (isDirectOfferToMe) {
          const btnDecline = document.createElement('button');
          btnDecline.className = 'btn-secondary btn-sm';
          btnDecline.textContent = t('declineTrade');
          btnDecline.onclick = (e) => {
            e.stopPropagation();
            declineShiftTrade(shift.id);
          };
          actionsDiv.appendChild(btnDecline);
        }
      }

      if (isMyShift || amAdmin) {
        const manageBtn = document.createElement('button');
        manageBtn.className = 'btn-secondary btn-sm';
        manageBtn.textContent = t('manageShift');
        manageBtn.onclick = (e) => {
          e.stopPropagation();
          openShiftDetailsModal(shift);
        };
        actionsDiv.appendChild(manageBtn);
      }

      if (actionsDiv.children.length > 0) {
        card.appendChild(actionsDiv);
      }

      dayDiv.appendChild(card);
    });

    elements.calendarGrid.appendChild(dayDiv);
  }
}

function openShiftDetailsModal(shift) {
  const activeUserId = getUserId(currentUser);
  const room = rooms.find(r => getRoomKey(r) === currentRoomId);
  const amAdmin = room ? isUserAdmin(room, activeUserId) : false;
  const isMyShift = shift.userId === activeUserId;
  const isOpenOffer = shift.status === 'offered' && shift.tradeOffer && shift.tradeOffer.mode === 'open';
  const isDirectOfferToMe = shift.status === 'offered' && shift.tradeOffer && shift.tradeOffer.toUserId === activeUserId;

  const statusKey = shift.status === 'confirmed' ? 'shiftStatusConfirmed' :
                    shift.status === 'not_needed' ? 'shiftStatusNotNeeded' :
                    shift.status === 'offered' ? 'shiftStatusOffered' :
                    shift.status === 'completed' ? 'shiftStatusCompleted' : 'shiftStatusAssigned';

  elements.shiftDetailInfo.innerHTML = `
    <div class="shift-detail-row">
      <span class="shift-detail-label">${t('assignedToLabel')}:</span>
      <strong>${shift.displayName}</strong>
    </div>
    <div class="shift-detail-row">
      <span class="shift-detail-label">${t('shiftDateLabel')}:</span>
      <span>${shift.date}</span>
    </div>
    <div class="shift-detail-row">
      <span class="shift-detail-label">${t('shiftTimeLabel')}:</span>
      <span>${shift.time}</span>
    </div>
    <div class="shift-detail-row">
      <span class="shift-detail-label">${t('shiftStatusLabel')}:</span>
      <span class="status-badge ${shift.status}">${t(statusKey)}</span>
    </div>
  `;

  elements.shiftModalActions.innerHTML = '';

  if (isMyShift && shift.status !== 'completed' && shift.status !== 'not_needed') {
    if (shift.status !== 'confirmed') {
      const btnConfirm = document.createElement('button');
      btnConfirm.className = 'btn-secondary';
      btnConfirm.textContent = t('confirmAttendance');
      btnConfirm.onclick = () => {
        elements.modalShiftDetails.classList.remove('active');
        updateShiftStatus(shift.id, 'confirmed');
      };
      elements.shiftModalActions.appendChild(btnConfirm);
    }

    const btnTrade = document.createElement('button');
    btnTrade.className = 'btn-secondary';
    btnTrade.textContent = t('offerTrade');
    btnTrade.onclick = () => {
      elements.modalShiftDetails.classList.remove('active');
      openTradeModal(shift);
    };
    elements.shiftModalActions.appendChild(btnTrade);

    const btnFinish = document.createElement('button');
    btnFinish.className = 'btn-primary';
    btnFinish.textContent = t('markFinished');
    btnFinish.onclick = () => {
      elements.modalShiftDetails.classList.remove('active');
      completeShift(shift);
    };
    elements.shiftModalActions.appendChild(btnFinish);
  }

  if ((isMyShift || amAdmin) && shift.status === 'completed') {
    const btnUndoFinish = document.createElement('button');
    btnUndoFinish.className = 'btn-secondary';
    btnUndoFinish.textContent = t('unfinishShiftBtn');
    btnUndoFinish.onclick = () => {
      elements.modalShiftDetails.classList.remove('active');
      unfinishShift(shift);
    };
    elements.shiftModalActions.appendChild(btnUndoFinish);
  }

  if (!isMyShift && (isOpenOffer || isDirectOfferToMe)) {
    const btnTake = document.createElement('button');
    btnTake.className = 'btn-primary';
    btnTake.textContent = t('takeShiftBtn');
    btnTake.onclick = () => {
      elements.modalShiftDetails.classList.remove('active');
      claimShift(shift.id);
    };
    elements.shiftModalActions.appendChild(btnTake);

    if (isDirectOfferToMe) {
      const btnDeclineTrade = document.createElement('button');
      btnDeclineTrade.className = 'btn-secondary';
      btnDeclineTrade.textContent = t('declineTrade');
      btnDeclineTrade.onclick = () => {
        elements.modalShiftDetails.classList.remove('active');
        declineShiftTrade(shift.id);
      };
      elements.shiftModalActions.appendChild(btnDeclineTrade);
    }
  }

  if (amAdmin) {
    if (shift.status !== 'completed' && shift.status !== 'not_needed') {
      const btnNoWork = document.createElement('button');
      btnNoWork.className = 'btn-secondary';
      btnNoWork.textContent = t('btnNoWork');
      btnNoWork.onclick = () => {
        elements.modalShiftDetails.classList.remove('active');
        updateShiftStatus(shift.id, 'not_needed');
      };
      elements.shiftModalActions.appendChild(btnNoWork);
    } else if (shift.status === 'not_needed') {
      const btnUndoNoWork = document.createElement('button');
      btnUndoNoWork.className = 'btn-secondary';
      btnUndoNoWork.textContent = t('btnUndoNoWork');
      btnUndoNoWork.onclick = () => {
        elements.modalShiftDetails.classList.remove('active');
        updateShiftStatus(shift.id, 'assigned');
      };
      elements.shiftModalActions.appendChild(btnUndoNoWork);
    }

    const btnEdit = document.createElement('button');
    btnEdit.className = 'btn-secondary';
    btnEdit.textContent = t('editShiftBtn');
    btnEdit.onclick = () => {
      elements.modalShiftDetails.classList.remove('active');
      openEditShiftModal(shift);
    };
    elements.shiftModalActions.appendChild(btnEdit);

    const btnDel = document.createElement('button');
    btnDel.className = 'btn-secondary';
    btnDel.textContent = t('deleteShift');
    btnDel.onclick = () => {
      elements.modalShiftDetails.classList.remove('active');
      deleteShift(shift.id);
    };
    elements.shiftModalActions.appendChild(btnDel);
  }

  elements.modalShiftDetails.classList.add('active');
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
    notes: `${t('navSchedule')}: ${shift.time}`,
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

async function unfinishShift(shift) {
  shift.status = 'confirmed';
  localData.roomState.timeLogs = (localData.roomState.timeLogs || []).filter(l => l.shiftId !== shift.id);
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
    opt.dataset.username = m.username || '';
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

async function getOrCreateDmRoom(targetUserId, targetUsername) {
  const activeUserId = getUserId(currentUser);
  await pullDmRooms();
  let existingRoom = dmRooms.find(r => {
    const members = Array.isArray(r.members) ? r.members : [];
    const ids = members.map(m => getUserId(m));
    return ids.includes(activeUserId) && ids.includes(targetUserId);
  });

  if (!existingRoom) {
    const created = await apiCall('/external/rooms', 'POST', {
      name: `DM_${[activeUserId, targetUserId].sort().join('_')}`,
      description: 'Direct Message',
      appId: DM_APP_KEY
    });
    existingRoom = created.room || created;
    const newRoomId = getRoomKey(existingRoom);
    await apiCall(`/external/rooms/${newRoomId}/members`, 'POST', { username: targetUsername });
    await pullDmRooms();
  }

  return existingRoom;
}

elements.tradeShiftForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!activeTradeShiftId) return;
  
  const shift = localData.roomState.shifts.find(s => s.id === activeTradeShiftId);
  if (!shift) return;

  const isOpenTrade = elements.tradeModeOpen.checked;
  const offerId = 'offer_' + Date.now();
  shift.status = 'offered';

  if (isOpenTrade) {
    shift.tradeOffer = {
      id: offerId,
      mode: 'open',
      fromUserId: getUserId(currentUser),
      fromDisplayName: getUserDisplayName(currentUser)
    };

    const sysMsg = {
      id: Date.now().toString(),
      type: 'trade_broadcast',
      offerId: offerId,
      shiftId: shift.id,
      shiftDate: shift.date,
      shiftTime: shift.time,
      ownerId: getUserId(currentUser),
      ownerDisplayName: getUserDisplayName(currentUser),
      targetDisplayName: null,
      author: 'System',
      msgKey: 'systemTradeBroadcast',
      msgVars: {
        owner: getUserDisplayName(currentUser),
        date: shift.date,
        time: shift.time
      },
      timestamp: new Date().toISOString()
    };
    localData.roomState.messages.push(sysMsg);
    await pushRoomData();
    renderCompanyChat();
  } else {
    const targetOpt = elements.tradeTargetUser.options[elements.tradeTargetUser.selectedIndex];
    const targetUserId = targetOpt.value;
    const targetUsername = targetOpt.dataset.username;
    const targetDisplayName = targetOpt.dataset.displayName;

    shift.tradeOffer = {
      id: offerId,
      mode: 'direct',
      fromUserId: getUserId(currentUser),
      fromDisplayName: getUserDisplayName(currentUser),
      toUserId: targetUserId,
      toDisplayName: targetDisplayName
    };

    await pushRoomData();

    try {
      const dmRoom = await getOrCreateDmRoom(targetUserId, targetUsername);
      const dmRoomId = getRoomKey(dmRoom);

      let dmMessages = [];
      if (dmRoom.cases && dmRoom.cases.length > 0 && dmRoom.cases[0].blocks && dmRoom.cases[0].blocks[0]) {
        try {
          const parsed = JSON.parse(dmRoom.cases[0].blocks[0]);
          dmMessages = Array.isArray(parsed.messages) ? parsed.messages : [];
        } catch (err) {
          dmMessages = [];
        }
      }

      const dmSysMsg = {
        id: Date.now().toString(),
        type: 'trade_direct',
        offerId: offerId,
        shiftId: shift.id,
        shiftDate: shift.date,
        shiftTime: shift.time,
        ownerId: getUserId(currentUser),
        ownerDisplayName: getUserDisplayName(currentUser),
        targetUserId: targetUserId,
        targetDisplayName: targetDisplayName,
        author: 'System',
        msgKey: 'systemTradeDirect',
        msgVars: {
          owner: getUserDisplayName(currentUser),
          target: targetDisplayName,
          date: shift.date,
          time: shift.time
        },
        timestamp: new Date().toISOString()
      };

      dmMessages.push(dmSysMsg);

      const cases = [{
        id: `dm_data_${dmRoomId}`,
        folderId: dmRoomId,
        title: 'DMState',
        blocks: [JSON.stringify({ messages: dmMessages })]
      }];

      await apiCall(`/external/rooms/${dmRoomId}`, 'PUT', {
        name: dmRoom.name || 'Direct Message',
        description: 'DM Conversation',
        cases
      });

      if (activeDmRoomId === dmRoomId) {
        localData.activeDmState.messages = dmMessages;
        renderDmMessages();
      }
    } catch (err) {
      alert(err.message);
    }
  }

  elements.modalTradeShift.classList.remove('active');
  activeTradeShiftId = null;
  renderSchedule();
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
    msgKey: 'systemClaimMessage',
    msgVars: {
      claimer: getUserDisplayName(currentUser),
      owner: prevOwnerName,
      date: shift.date,
      time: shift.time
    },
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

  const claimerName = getUserDisplayName(currentUser);
  const shiftDate = shift.date;
  const shiftTime = shift.time;

  shift.tradeOffer = null;
  shift.status = 'assigned';

  const declineNotice = {
    id: Date.now().toString(),
    userId: getUserId(currentUser),
    author: 'System',
    msgKey: 'systemDeclineMessage',
    msgVars: {
      decliner: claimerName,
      date: shiftDate,
      time: shiftTime
    },
    timestamp: new Date().toISOString()
  };
  localData.roomState.messages.push(declineNotice);

  await pushRoomData();
  renderSchedule();
  renderCompanyChat();
}

async function acceptDirectTradeFromDm(shiftId) {
  const shift = localData.roomState.shifts.find(s => s.id === shiftId);
  const prevOwnerName = shift ? shift.displayName : '';
  const shiftDate = shift ? shift.date : '';
  const shiftTime = shift ? shift.time : '';

  await claimShift(shiftId);
  if (activeDmRoomId) {
    const claimNotice = {
      id: Date.now().toString(),
      userId: getUserId(currentUser),
      author: 'System',
      msgKey: 'systemClaimMessage',
      msgVars: {
        claimer: getUserDisplayName(currentUser),
        owner: prevOwnerName,
        date: shiftDate,
        time: shiftTime
      },
      timestamp: new Date().toISOString()
    };
    localData.activeDmState.messages.push(claimNotice);

    const cases = [{
      id: `dm_data_${activeDmRoomId}`,
      folderId: activeDmRoomId,
      title: 'DMState',
      blocks: [JSON.stringify(localData.activeDmState)]
    }];

    await apiCall(`/external/rooms/${activeDmRoomId}`, 'PUT', {
      name: 'Direct Message',
      description: 'DM Conversation',
      cases
    });
    renderDmMessages();
  }
}

async function declineDirectTradeFromDm(shiftId) {
  const shift = localData.roomState.shifts.find(s => s.id === shiftId);
  const shiftDate = shift ? shift.date : '';
  const shiftTime = shift ? shift.time : '';

  await declineShiftTrade(shiftId);
  if (activeDmRoomId) {
    const declineNotice = {
      id: Date.now().toString(),
      userId: getUserId(currentUser),
      author: 'System',
      msgKey: 'systemDeclineMessage',
      msgVars: {
        decliner: getUserDisplayName(currentUser),
        date: shiftDate,
        time: shiftTime
      },
      timestamp: new Date().toISOString()
    };
    localData.activeDmState.messages.push(declineNotice);

    const cases = [{
      id: `dm_data_${activeDmRoomId}`,
      folderId: activeDmRoomId,
      title: 'DMState',
      blocks: [JSON.stringify(localData.activeDmState)]
    }];

    await apiCall(`/external/rooms/${activeDmRoomId}`, 'PUT', {
      name: 'Direct Message',
      description: 'DM Conversation',
      cases
    });
    renderDmMessages();
  }
}

async function deleteShift(shiftId) {
  localData.roomState.shifts = localData.roomState.shifts.filter(s => s.id !== shiftId);
  localData.roomState.timeLogs = (localData.roomState.timeLogs || []).filter(l => l.shiftId !== shiftId);
  await pushRoomData();
  renderSchedule();
  renderEarnings();
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
  const room = rooms.find(r => getRoomKey(r) === currentRoomId);
  if (!room || !isUserInRoom(room, activeUserId)) {
    return;
  }

  const amAdmin = isUserAdmin(room, activeUserId);
  const unavails = localData.roomState.unavailability || [];

  const myEntries = unavails.filter(u => u.userId === activeUserId);
  const teamEntries = unavails.filter(u => u.userId !== activeUserId);

  if (myEntries.length === 0) {
    const emptyLi = document.createElement('li');
    emptyLi.className = 'empty-state-text';
    emptyLi.textContent = t('noUnavailableDates');
    elements.myUnavailabilityList.appendChild(emptyLi);
  } else {
    myEntries.slice().sort((a, b) => new Date(a.date) - new Date(b.date)).forEach(u => {
      const li = buildUnavailabilityListItem(u, true);
      elements.myUnavailabilityList.appendChild(li);
    });
  }

  if (teamEntries.length === 0) {
    const emptyLi = document.createElement('li');
    emptyLi.className = 'empty-state-text';
    emptyLi.textContent = t('noUnavailableDates');
    elements.teamUnavailabilityList.appendChild(emptyLi);
  } else {
    teamEntries.slice().sort((a, b) => new Date(a.date) - new Date(b.date)).forEach(u => {
      const li = buildUnavailabilityListItem(u, amAdmin);
      elements.teamUnavailabilityList.appendChild(li);
    });
  }
}

function buildUnavailabilityListItem(u, allowDelete) {
  const li = document.createElement('li');
  li.className = 'log-item';

  const meta = document.createElement('div');
  meta.className = 'log-item-meta';

  const unavailDate = new Date(u.date);
  const shiftsOnDate = (localData.roomState.shifts || []).filter(s => {
    if (s.userId !== u.userId) return false;
    if (s.repeat) {
      const sDate = new Date(s.date);
      return sDate.getDay() === unavailDate.getDay() && sDate <= unavailDate;
    }
    return s.date === u.date;
  });

  let conflictMarkup = '';
  if (shiftsOnDate.length > 0) {
    const shiftTimes = shiftsOnDate.map(s => s.time).join(', ');
    conflictMarkup = `<div class="conflict-badge">${t('conflictShiftBadge')}: ${t('hasShiftOnDate')} ${shiftTimes}</div>`;
  } else {
    conflictMarkup = `<div class="muted-note">${t('noShiftOnDate')}</div>`;
  }

  meta.innerHTML = `<strong>${u.displayName}</strong> - ${u.date}<br><span class="muted-note">${u.reason}</span>${conflictMarkup}`;

  const actions = document.createElement('div');
  actions.className = 'log-item-actions';

  if (allowDelete) {
    const btnDel = document.createElement('button');
    btnDel.className = 'btn-secondary btn-sm';
    btnDel.textContent = t('deleteLogBtn');
    btnDel.onclick = () => deleteUnavailable(u.id);
    actions.appendChild(btnDel);
  }

  li.appendChild(meta);
  if (actions.children.length > 0) {
    li.appendChild(actions);
  }
  return li;
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

elements.companyChatImage.addEventListener('change', () => {
  const file = elements.companyChatImage.files[0];
  elements.companyFileIndicator.textContent = file ? file.name : '';
});

elements.dmChatImage.addEventListener('change', () => {
  const file = elements.dmChatImage.files[0];
  elements.dmFileIndicator.textContent = file ? file.name : '';
});

elements.tabCompanyChat.addEventListener('click', () => {
  elements.tabCompanyChat.classList.add('active');
  elements.tabPrivateChat.classList.remove('active');
  elements.companyChatPanel.classList.add('active');
  elements.privateChatPanel.classList.remove('active');
  scrollToBottom(elements.companyChatMessages);
});

elements.tabPrivateChat.addEventListener('click', () => {
  elements.tabPrivateChat.classList.add('active');
  elements.tabCompanyChat.classList.remove('active');
  elements.privateChatPanel.classList.add('active');
  elements.companyChatPanel.classList.remove('active');
  pullDmRooms();
  scrollToBottom(elements.dmChatMessages);
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
      cardDetails.textContent = t('systemTradeBroadcast', {
        owner: msg.ownerDisplayName,
        date: msg.shiftDate,
        time: msg.shiftTime
      });
      card.appendChild(cardDetails);

      const cardActions = document.createElement('div');
      cardActions.className = 'trade-card-actions';

      const correspondingShift = localData.roomState.shifts.find(s => s.id === msg.shiftId);
      const isCurrentActiveOffer = correspondingShift &&
                                  correspondingShift.status === 'offered' &&
                                  correspondingShift.tradeOffer &&
                                  correspondingShift.tradeOffer.id === msg.offerId;

      if (isCurrentActiveOffer) {
        if (msg.ownerId !== activeUserId) {
          const btnTake = document.createElement('button');
          btnTake.className = 'btn-primary btn-sm';
          btnTake.textContent = t('takeShiftBtn');
          btnTake.onclick = () => claimShift(msg.shiftId);
          cardActions.appendChild(btnTake);
        }
      } else if (correspondingShift && correspondingShift.status === 'confirmed') {
        const claimedSpan = document.createElement('span');
        claimedSpan.className = 'claimed-badge';
        claimedSpan.textContent = `${t('shiftClaimedBy')} ${correspondingShift.displayName}`;
        cardActions.appendChild(claimedSpan);
      } else {
        const expiredSpan = document.createElement('span');
        expiredSpan.className = 'muted-note';
        expiredSpan.textContent = t('tradeExpired');
        cardActions.appendChild(expiredSpan);
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
    
    if (msg.msgKey) {
      bubble.textContent = t(msg.msgKey, msg.msgVars || {});
    } else {
      bubble.textContent = msg.text;
    }
    
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
  scrollToBottom(elements.companyChatMessages);
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
  elements.companyFileIndicator.textContent = '';
  renderCompanyChat();
});

async function pullDmRooms() {
  try {
    const res = await apiCall(`/external/rooms?appId=${DM_APP_KEY}`);
    dmRooms = Array.isArray(res) ? res : (res && res.rooms) ? res.rooms : [];
    renderDmMembersList();
  } catch (err) {
    dmRooms = [];
  }
}

function renderDmMembersList() {
  elements.dmMembersList.innerHTML = '';
  const room = rooms.find(r => getRoomKey(r) === currentRoomId);
  const activeUserId = getUserId(currentUser);
  if (!room || !isUserInRoom(room, activeUserId)) return;

  const members = Array.isArray(room.members) ? room.members : [];
  members.filter(m => getUserId(m) !== activeUserId).forEach(m => {
    const targetId = getUserId(m);
    const li = document.createElement('li');
    li.className = `dm-room-item ${targetId === activeDmTargetUserId ? 'active' : ''}`;
    li.textContent = `${getUserDisplayName(m)} (@${m.username})`;
    li.onclick = () => openDmWithUser(m);
    elements.dmMembersList.appendChild(li);
  });
}

async function openDmWithUser(targetMember) {
  const targetId = getUserId(targetMember);
  activeDmTargetUserId = targetId;
  renderDmMembersList();

  elements.dmActiveTitle.textContent = `${getUserDisplayName(targetMember)} (@${targetMember.username})`;
  elements.dmChatForm.classList.remove('hidden');

  const existingRoom = await getOrCreateDmRoom(targetId, targetMember.username);
  activeDmRoomId = getRoomKey(existingRoom);
  selectDmRoom(activeDmRoomId);
}

async function selectDmRoom(roomId) {
  activeDmRoomId = roomId;
  const room = dmRooms.find(r => getRoomKey(r) === roomId);
  if (!room) return;

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

    if (msg.type === 'trade_direct') {
      wrapper.className = 'chat-msg system';
      const card = document.createElement('div');
      card.className = 'trade-broadcast-card';

      const cardHead = document.createElement('div');
      cardHead.className = 'trade-card-header';
      cardHead.innerHTML = `<strong>${t('tradeDirectOfferTitle')}</strong><span class="muted-note">${new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>`;
      card.appendChild(cardHead);

      const cardDetails = document.createElement('div');
      cardDetails.className = 'trade-card-details';
      cardDetails.textContent = t('systemTradeDirect', {
        owner: msg.ownerDisplayName,
        target: msg.targetDisplayName,
        date: msg.shiftDate,
        time: msg.shiftTime
      });
      card.appendChild(cardDetails);

      const cardActions = document.createElement('div');
      cardActions.className = 'trade-card-actions';

      const correspondingShift = localData.roomState.shifts.find(s => s.id === msg.shiftId);
      const isCurrentActiveOffer = correspondingShift &&
                                  correspondingShift.status === 'offered' &&
                                  correspondingShift.tradeOffer &&
                                  correspondingShift.tradeOffer.id === msg.offerId;

      if (isCurrentActiveOffer) {
        if (msg.targetUserId === activeUserId) {
          const btnTake = document.createElement('button');
          btnTake.className = 'btn-primary btn-sm';
          btnTake.textContent = t('acceptTrade');
          btnTake.onclick = () => acceptDirectTradeFromDm(msg.shiftId);
          cardActions.appendChild(btnTake);

          const btnDecline = document.createElement('button');
          btnDecline.className = 'btn-secondary btn-sm';
          btnDecline.textContent = t('declineTrade');
          btnDecline.onclick = () => declineDirectTradeFromDm(msg.shiftId);
          cardActions.appendChild(btnDecline);
        }
      } else if (correspondingShift && correspondingShift.status === 'confirmed') {
        const claimedSpan = document.createElement('span');
        claimedSpan.className = 'claimed-badge';
        claimedSpan.textContent = `${t('shiftClaimedBy')} ${correspondingShift.displayName}`;
        cardActions.appendChild(claimedSpan);
      } else {
        const expiredSpan = document.createElement('span');
        expiredSpan.className = 'muted-note';
        expiredSpan.textContent = t('tradeExpired');
        cardActions.appendChild(expiredSpan);
      }

      card.appendChild(cardActions);
      wrapper.appendChild(card);
      elements.dmChatMessages.appendChild(wrapper);
      return;
    }

    const isSystem = msg.author === 'System';
    wrapper.className = `chat-msg ${msg.userId === activeUserId && !isSystem ? 'self' : ''} ${isSystem ? 'system' : ''}`;
    
    const author = document.createElement('span');
    author.className = 'msg-author';
    author.textContent = msg.author;
    
    const bubble = document.createElement('div');
    bubble.className = 'msg-bubble';
    
    if (msg.msgKey) {
      bubble.textContent = t(msg.msgKey, msg.msgVars || {});
    } else {
      bubble.textContent = msg.text;
    }
    
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
  scrollToBottom(elements.dmChatMessages);
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
  elements.dmFileIndicator.textContent = '';
  renderDmMessages();
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

function getValidCompletedLogs() {
  const allLogs = Array.isArray(localData.roomState.timeLogs) ? localData.roomState.timeLogs : [];
  return allLogs.filter(log => {
    if (log.shiftId) {
      const shift = (localData.roomState.shifts || []).find(s => s.id === log.shiftId);
      return shift && shift.status === 'completed';
    }
    return true;
  });
}

function renderEarnings() {
  const activeUserId = getUserId(currentUser);
  const myRateConfig = getUserRateConfig(activeUserId);
  
  elements.payRateInput.value = myRateConfig.rate || '';
  elements.payPeriodSelect.value = myRateConfig.period || 'hourly';
  
  const effectiveHourly = calculateEffectiveHourlyRate(myRateConfig.rate, myRateConfig.period);
  elements.effectiveRateDisplay.textContent = `${t('effectiveRateText')} $${effectiveHourly.toFixed(2)}/hr`;
  
  elements.hoursLogList.innerHTML = '';
  
  const validLogs = getValidCompletedLogs();
  const now = new Date();
  const weekStart = getMonday(now);
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  
  let myWeekHours = 0;
  let myMonthHours = 0;
  
  validLogs.forEach(log => {
    if (log.userId === activeUserId) {
      const d = new Date(log.date);
      if (d >= weekStart) myWeekHours += log.duration;
      if (d >= monthStart) myMonthHours += log.duration;
    }
  });
  
  elements.weekHours.textContent = `${myWeekHours} ${t('hoursUnit')}`;
  elements.weekEarnings.textContent = `$${(myWeekHours * effectiveHourly).toFixed(2)}`;
  
  elements.monthHours.textContent = `${myMonthHours} ${t('hoursUnit')}`;
  elements.monthEarnings.textContent = `$${(myMonthHours * effectiveHourly).toFixed(2)}`;
  
  const filter = elements.hoursFilterSelect.value;
  const filteredLogs = filter === 'mine' ? validLogs.filter(l => l.userId === activeUserId) : validLogs;
  
  const room = rooms.find(r => getRoomKey(r) === currentRoomId);
  const amAdmin = room ? isUserAdmin(room, activeUserId) : false;
  
  filteredLogs.slice().sort((a, b) => new Date(b.date) - new Date(a.date)).forEach(log => {
    const li = document.createElement('li');
    li.className = 'log-item';
    
    const meta = document.createElement('div');
    meta.className = 'log-item-meta';
    
    const title = document.createElement('span');
    title.innerHTML = `<strong>${log.displayName}</strong> - ${log.date}`;
    
    const duration = document.createElement('span');
    duration.className = 'muted-note';
    duration.textContent = `${log.duration} ${t('hoursUnit')} ${log.notes ? `(${log.notes})` : ''}`;
    
    meta.appendChild(title);
    meta.appendChild(duration);
    
    const actions = document.createElement('div');
    actions.className = 'log-item-actions';
    
    if (log.userId === activeUserId || amAdmin) {
      const btnDel = document.createElement('button');
      btnDel.className = 'btn-secondary btn-sm';
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
  const logToDelete = (localData.roomState.timeLogs || []).find(l => l.id === logId);
  if (logToDelete && logToDelete.shiftId) {
    const linkedShift = (localData.roomState.shifts || []).find(s => s.id === logToDelete.shiftId);
    if (linkedShift) {
      linkedShift.status = 'confirmed';
    }
  }
  localData.roomState.timeLogs = (localData.roomState.timeLogs || []).filter(l => l.id !== logId);
  await pushRoomData();
  renderSchedule();
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
  getValidCompletedLogs().forEach(log => {
    if (log.userId === activeUserId && new Date(log.date) >= startDate) {
      totalHrs += log.duration;
    }
  });

  const totalEarnings = (totalHrs * effectiveHourly).toFixed(2);
  elements.calcSinceResult.textContent = `${totalHrs} ${t('hoursUnit')} = $${totalEarnings}`;
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
  getValidCompletedLogs().forEach(log => {
    if (log.userId === activeUserId) {
      const logD = new Date(log.date);
      if (logD >= targetMonday && logD <= targetSunday) {
        totalHrs += log.duration;
      }
    }
  });

  const totalEarnings = (totalHrs * effectiveHourly).toFixed(2);
  elements.calcWeekResult.textContent = `${totalHrs} ${t('hoursUnit')} = $${totalEarnings}`;
});

elements.btnCalcRange.addEventListener('click', () => {
  const startStr = elements.queryRangeStart.value;
  const endStr = elements.queryRangeEnd.value;
  if (!startStr || !endStr) return;

  const startDate = new Date(startStr);
  const endDate = new Date(endStr);
  endDate.setHours(23, 59, 59, 999);

  const activeUserId = getUserId(currentUser);
  const myRateConfig = getUserRateConfig(activeUserId);
  const effectiveHourly = calculateEffectiveHourlyRate(myRateConfig.rate, myRateConfig.period);

  let totalHrs = 0;
  getValidCompletedLogs().forEach(log => {
    if (log.userId === activeUserId) {
      const logD = new Date(log.date);
      if (logD >= startDate && logD <= endDate) {
        totalHrs += log.duration;
      }
    }
  });

  const totalEarnings = (totalHrs * effectiveHourly).toFixed(2);
  elements.calcRangeResult.textContent = `${totalHrs} ${t('hoursUnit')} = $${totalEarnings}`;
});

function renderSettings(room) {
  elements.memberList.innerHTML = '';
  elements.readonlyMemberList.innerHTML = '';

  const activeUserId = getUserId(currentUser);
  if (!room || !isUserInRoom(room, activeUserId)) {
    const emptyNotice = document.createElement('li');
    emptyNotice.className = 'empty-state-text';
    emptyNotice.textContent = t('notInWorkspace');
    elements.readonlyMemberList.appendChild(emptyNotice);
    elements.adminSettings.classList.add('hidden');
    elements.nonAdminSettings.classList.remove('hidden');
    return;
  }

  const roomId = getRoomKey(room);
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
      toggleAdminBtn.className = 'btn-secondary btn-sm';
      toggleAdminBtn.textContent = mIsAdmin ? t('revokeAdmin') : t('makeAdmin');
      toggleAdminBtn.onclick = () => toggleMemberAdmin(room, memberId);
      controls.appendChild(toggleAdminBtn);
      
      if (memberId !== activeUserId) {
        const removeBtn = document.createElement('button');
        removeBtn.className = 'btn-secondary btn-sm';
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
  elements.calendarGrid.innerHTML = '<div style="padding: 2rem; grid-column: 1 / -1; text-align: center; color: var(--text-muted);">' + t('selectWorkspaceFirst') + '</div>';
  elements.companyChatMessages.innerHTML = '';
  elements.dmMembersList.innerHTML = '';
  elements.dmChatMessages.innerHTML = '';
  elements.memberList.innerHTML = '';
  elements.readonlyMemberList.innerHTML = '';
  elements.myUnavailabilityList.innerHTML = '';
  elements.teamUnavailabilityList.innerHTML = '';
  elements.hoursLogList.innerHTML = '';
  elements.scheduleRoleBadge.textContent = '';
  elements.btnAddShift.classList.add('hidden');
}

if (authToken) {
  initializeApp();
}