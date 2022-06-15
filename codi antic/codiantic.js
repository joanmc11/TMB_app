<ScrollView >

      <View style={styles.container}>
        <Text style={{ fontSize: 40, fontWeight: 'bold', paddingVertical: 50 }}>Components TMB</Text>

        <TextSeparator title="Header" />
        <Header title="Titol de la pagina"/>

        <TextSeparator title="Main Icons" />

        <ScrollView style={{ flexDirection: 'row' }} horizontal={true}>
          <LogoTMB />
          <Logoibus/>
          <Logobus/>
          <Logolocation/>
          <Logowarning />
          <Logoticket/>
          <LogoMetro/>
        </ScrollView>
        <StatusBar style="auto" />

        <TextSeparator title="Search Box" />
        <View style={{ flexDirection: 'row' }}>
          <SearchBox />
        </View>

        <TextSeparator title="Station Stops" />
        <View style={{ alignSelf: 'stretch' }}>
          <StationFirstStop color="red" parada="Fondó" separador={false} />
          <StationMiddleStop color="red" parada="Santa Coloma" separador={false} />
          <StationMiddleStop color="red" parada="Bellvitge" separador={true} />
          <StationEndStop color="red" parada="Hospital de Bellvitge" />
        </View>

        <TextSeparator title="Line Names" />
        <View style={{ alignSelf: 'stretch' }}>
          <LineName color="orange" linea="L4" start="La Pau" end="Trinitat Nova" incidencies={false} intercalat={false} />
          <LineName color="green" linea="L11" start="Trinitat Nova" end="Can Cuiàs" incidencies={false} intercalat={true} />
          <LineName color="orange" linea="L4" start="La Pau" end="Trinitat Nova" incidencies={true} intercalat={false} />
        </View>

        <TextSeparator title="Bus Line Names" />
        <View style={{ alignSelf: 'stretch' }}>
          <BusLineName color="red" linea="27" start="La Pau" end="Trinitat Nova" incidencies={false} intercalat={false} />
          <BusLineName color="red" linea="129" start="Trinitat Nova" end="Can Cuiàs" incidencies={false} intercalat={true} />
          <BusLineName color="red" linea="34" start="La Pau" end="Trinitat Nova" incidencies={true} intercalat={false} />
        </View>

        <TextSeparator title="Warnings" />
        <View style={{ alignSelf: 'stretch' }}>
          <Warnings informacio="Mesures de prevenció pel Coronavirus" intercalat={false} />
          <Warnings informacio="'Obrim Carrers' Barcelona" intercalat={true} />
          <Warnings informacio="Tall L5 de Diagonal a Vilapicina" intercalat={false} />
        </View>

        <TextSeparator title="Line Warnings" />
        <View style={{ alignSelf: 'stretch' }}>
          <LineWarnings data='02/04/2022' data2="06/04/2022" informacio="Mesures de prevenció pel Coronavirus" />
          <LineWarnings data='02/04/2022' data2="06/04/2022" informacio="'Obrim Carrers' Barcelona" />
          <LineWarnings data='02/04/2022' data2="06/04/2022" informacio="Tall L5 de Diagonal a Vilapicina" />
        </View>

        <TextSeparator title="Line Title and Buttons" />
        <View style={{ alignSelf: 'stretch' }}>
          <LineTitle line="L1" principi="Principi Trajecte" final="Final Trajecte" />
          <LineButtons />
        </View>

        <TextSeparator title="Bus Line Title" />
        <View style={{ alignSelf: 'stretch' }}>
          <BusLineTitle line="134" principi="Principi Trajecte" final="Final Trajecte" />
        </View>

        <TextSeparator title="Real Bus Line Title and Real Bus Line names" />
        <View style={{ alignSelf: 'stretch' }}>
          <RealBusTitle titol="Properes Arribades" time="Actualitzat fa 10s" />
        </View>


        <View style={{ alignSelf: 'stretch' }}>
          <RealBusLineName color="red" linea="27" start="Les Torres" end="Mina de la ciutat" time="2 min" separador={false} />
          <RealBusLineName color="red" linea="129" start="Trinitat Nova" end="Can Cuiàs" time="2 min" separador={true} />
          <RealBusLineName color="red" linea="34" start="La Pau" end="Trinitat Nova" time="2 min" separador={true} />
        </View>
        <TextSeparator title="Ticket Select" />
        <TicketSelect/>

        <TextSeparator title="Ticket Image Name" />
        <TicketImageName bitllet="T-usual"/>

        <TextSeparator title="Ticket Price Table" />
        <TicketPriceTable/>

         <TextSeparator title="Timetables" />
          <Timetable feiners="05h - 24h" dissabtesInici="00h - 02h" dissabtesFinal="05h - 24h" diumenges="00h - 24h" vigilies="00h - 24h" />
  
         <TextSeparator title="Station buttons (timetable and warnings)" />
        <View style={{ alignSelf: 'stretch' }}>
          <StationButtonWarnings  incidencies={true} />
           <StationButtonTimetable />
            </View>
        


      </View>
    </ScrollView>