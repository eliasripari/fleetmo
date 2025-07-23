# FleetMo - Piattaforma di Fleet Management Avanzata

## 📖 Panoramica Generale

**FleetMo** è una piattaforma SaaS avanzata di fleet management progettata per rivoluzionare la gestione del trasporto passeggeri e la coordinazione della flotta. La piattaforma offre un sistema completo di assignment chain, tracking GPS real-time e gestione intelligente delle operazioni di trasporto.

### 🎯 Caratteristiche Principali

- **Assignment Chain System**: Sistema di assegnazione a catena Provider → Supplier → Driver con tracking completo delle transazioni
- **Fleet Tracking GPS**: Monitoraggio real-time delle posizioni dei driver con dashboard Mapbox interattiva
- **AI-Powered Assignment**: Sistema di assegnazione intelligente basato su algoritmi AI per ottimizzazione automatica
- **Subscription Management**: Sistema di abbonamenti a due livelli (Standard €49/mese, Pro €99/mese)
- **Multi-Role Architecture**: Gestione completa di 4 ruoli utente distinti con permessi granulari
- **Real-Time Analytics**: Dashboard avanzate con metriche operative e business intelligence

### 🏗️ Architettura Tecnologica

- **Frontend**: Next.js 14 con TypeScript e Tailwind CSS
- **Backend**: API Routes Next.js con Supabase PostgreSQL
- **Authentication**: Supabase Auth con gestione sessioni avanzata
- **Payment Processing**: Stripe per gestione abbonamenti e fatturazione
- **Maps Integration**: Mapbox per tracking GPS e visualizzazione mappe
- **UI Components**: Shadcn/ui per interfaccia moderna e responsive

### 🚀 Funzionalità Business

- **Service Management**: Creazione, modifica e gestione completa dei servizi di trasporto
- **Bulk Operations**: Operazioni in massa per gestione efficiente di grandi volumi
- **Price Negotiation**: Sistema di negoziazione prezzi lungo la catena di assignment
- **Commission Tracking**: Calcolo automatico delle commissioni driver e markup supplier
- **Audit Trail**: Tracciamento completo di tutte le operazioni con history dettagliata
- **Notification System**: Sistema di notifiche real-time per tutti gli stakeholder

---

## 🏢 Parte Provider

I **Provider** rappresentano le aziende di trasporto principali che ricevono richieste dai clienti e coordinano l'intera catena di servizio. Sono l'anello iniziale del sistema FleetMo.

### 🎯 Ruolo e Responsabilità

- **Gestione Clienti**: Ricevono richieste di trasporto dai clienti finali
- **Coordinamento Generale**: Orchestrano l'intera catena di servizio dalla richiesta alla consegna
- **Network Management**: Gestiscono una rete di supplier partner per coprire diverse zone geografiche
- **Quality Control**: Monitorano la qualità del servizio e mantengono gli standard aziendali

### ⚙️ Funzionalità Dedicate

#### **Service Creation & Management**

- Creazione servizi completi con tutti i dettagli (pickup, dropoff, passeggeri, volo)
- Gestione calendario con restrizioni date passate
- Upload massivo via CSV per gestione volume alto
- Editing completo servizi con history tracking

#### **Assignment Chain Initiation**

- Avvio catena di assegnazione Provider → Supplier
- Selezione supplier dalla rete di partner connessi
- Negoziazione prezzi iniziali e definizione budget
- Tracking completo della catena con audit trail

#### **Supplier Network Management**

- Gestione relazioni business con supplier tramite sistema provider_supplier
- Invio e accettazione richieste di partnership
- Monitoraggio performance supplier partner
- Gestione zone di copertura e capacità

#### **Fleet Monitoring Dashboard**

- Dashboard tracking GPS real-time per monitoraggio flotta completa
- Visualizzazione mappa Mapbox con posizioni driver live
- Controllo servizi attivi e stato avanzamento
- Analytics operative con metriche performance

#### **Business Intelligence**

- Dashboard analytics con metriche operative complete
- Tracking ROI e profitabilità per servizio
- Report performance supplier e driver
- Analisi trend e ottimizzazione operazioni

### 🔧 Strumenti Specifici

- **Assignment Modal**: Interfaccia dedicata per assegnazione bulk o singola a supplier
- **Provider Dashboard**: Vista centralizzata di tutti i servizi e operazioni
- **Supplier Network Page**: Gestione completa della rete partner
- **Live Tracking Interface**: Monitoraggio real-time della flotta operativa

### 📊 Metriche e KPI

- Numero servizi gestiti e completati
- Performance supplier network (tempi, qualità, affidabilità)
- Marginalità per servizio e per partner
- Customer satisfaction e tempo di risposta

---

## 🤝 Parte Supplier

I **Supplier** sono partner operativi che gestiscono flotte locali e driver. Ricevono servizi dai provider e coordinano l'esecuzione tramite i loro driver.

### 🎯 Ruolo e Responsabilità

- **Fleet Management**: Gestiscono direttamente i driver e le operazioni locali
- **Service Execution**: Eseguono i servizi assegnati dai provider
- **Driver Coordination**: Coordinano assignment e scheduling dei driver
- **Quality Delivery**: Garantiscono l'esecuzione del servizio secondo gli standard

### ⚙️ Funzionalità Dedicate

#### **Incoming Rides Management**

- Ricezione servizi assegnati dai provider
- Accettazione/rifiuto servizi con motivazione
- Gestione coda servizi in entrata
- Prioritizzazione basata su urgenza e zone

#### **Driver Assignment System**

- Assignment driver con sistema AI intelligente (piano Pro)
- Assignment manuale con controllo completo
- Gestione disponibilità driver e working hours
- Ottimizzazione automatica basata su zona e capacità

#### **Supplier-to-Supplier Chain**

- Possibilità di sub-contrattare ad altri supplier partner
- Sistema friends per connessioni supplier-supplier
- Gestione catena extended con tracking completo
- Negoziazione prezzi nella catena di assignment

#### **Driver Fleet Management**

- Gestione completa profili driver
- Configurazione working hours e disponibilità
- Sistemi compensazione (salary vs commission)
- Tracking performance e quality scores

#### **Real-Time Operations**

- Dashboard operativo con servizi attivi
- Tracking GPS driver in tempo reale
- Gestione emergenze e situazioni critiche
- Comunicazione diretta con driver

### 🔧 Strumenti Specifici

- **Driver Assignment Modal**: Sistema intelligente per assignment ottimale
- **Incoming Rides Dashboard**: Gestione servizi in entrata
- **Driver Management Interface**: Controllo completo della flotta driver
- **Chain Assignment Tools**: Gestione sub-contratti supplier-supplier

### 📊 Funzionalità Avanzate

#### **AI Assignment (Piano Pro)**

- Algoritmo intelligente che considera:
  - Working hours driver e availability
  - Buffer time personalizzato per ogni driver
  - Vehicle type matching automatico
  - Workload balancing per prevenire sovraccarico
  - Time conflict detection
  - Scoring algorithm per assignment ottimale

#### **Commission Management**

- Calcolo automatico commissioni driver
- Gestione diversi modelli compensazione
- Tracking earnings per driver commission-based
- Privacy controls per driver salary-based

---

## 🚗 Parte Driver

I **Driver** rappresentano l'ultimo anello della catena operativa, eseguendo fisicamente i servizi di trasporto. FleetMo fornisce loro strumenti per gestione efficiente e tracking delle performance.

### 🎯 Ruolo e Responsabilità

- **Service Execution**: Esecuzione fisica dei servizi di trasporto
- **GPS Tracking**: Condivisione posizione real-time durante i servizi
- **Customer Service**: Interazione diretta con i clienti finali
- **Quality Maintenance**: Mantenimento standard qualità e puntualità

### ⚙️ Funzionalità Dedicate

#### **Service Assignment Reception**

- Ricezione notifiche assignment real-time
- Vista servizi assegnati con dettagli completi
- Calendario personale con planning settimanale
- Gestione accettazione/rifiuto servizi

#### **Real-Time GPS Tracking**

- Tracking automatico posizione durante servizi attivi
- Sistema start/stop tracking per ogni servizio
- Invio posizione GPS ogni 15 secondi durante l'attività
- Tracking battery level e metadati device

#### **Working Hours Management**

- Configurazione availability personale (giorni/orari)
- Gestione buffer time tra servizi
- Opt-out sistema AI assignment se preferito
- Note speciali per availability particolare

#### **Compensation Tracking**

- **Driver Commission-based**: Visualizzazione earnings calcolate
- **Driver Salary-based**: Focus su servizi senza visualizzazione finanziaria
- History compensation e payments
- Performance metrics per valutazione quality

### 🔧 Integrazione Mobile App

#### **Tracking API Integration**

- **Endpoint Start Tracking**: `POST /api/tracking/start`
- **Endpoint Update Position**: `POST /api/tracking/location`
- **Endpoint Complete Service**: `POST /api/tracking/complete`
- Authentication via JWT token
- Background GPS con gestione batteria ottimizzata

#### **Real-Time Data Flow**

```
Driver App → API FleetMo → Database → Dashboard Web → Real-time Updates
```

### 📊 Performance & Analytics

#### **Driver Metrics**

- Completion rate e puntualità
- Customer satisfaction scores
- Average speed e efficiency
- Time management e buffer optimization

#### **Compensation Models**

- **Salary**: Compensazione fissa con focus su service quality
- **Commission**: Percentage-based earnings con visibility completa
- **Mixed Models**: Combinazione salary + commission bonus

### 🔧 Strumenti Specifici

- **Driver Dashboard**: Vista personale servizi e planning
- **GPS Tracking Interface**: Controllo session tracking
- **Performance Analytics**: Metriche personali e improvement insights
- **Availability Manager**: Gestione working hours e preferences

### 📱 Mobile App Ready

Il sistema FleetMo è completamente predisposto per integrazione mobile app:

- **Complete API Suite**: Tutti gli endpoint necessari per tracking GPS
- **Real-time Integration**: Dashboard web sincronizzato con mobile
- **Background Processing**: Gestione GPS background ottimizzata
- **Battery Management**: Configurazioni per minimizzare consumo batteria
- **Offline Support**: Gestione disconnessioni temporanee di rete

---

## 🎯 Ecosystem Completo

FleetMo rappresenta un ecosistema completo dove **Provider**, **Supplier** e **Driver** collaborano in modo seamless per fornire servizi di trasporto di alta qualità con massima efficienza operativa e trasparenza totale lungo tutta la catena di valore.

### 🔄 Flusso Operativo Integrato

1. **Provider** riceve richiesta cliente → crea servizio → assegna a supplier partner
2. **Supplier** riceve assignment → accetta servizio → assegna a driver disponibile
3. **Driver** riceve notifica → accetta servizio → esegue tracking GPS → completa servizio
4. **Sistema** traccia tutto il flusso → genera analytics → ottimizza operazioni future

### 🚀 Valore Aggiunto Unico

- **Transparency**: Visibilità completa della catena operativa
- **Efficiency**: Ottimizzazione automatica con AI
- **Scalability**: Gestione volume alto con automazioni
- **Quality**: Controllo qualità end-to-end
- **Analytics**: Business intelligence avanzata per crescita strategica
