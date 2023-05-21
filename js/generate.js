﻿
function generate() {
    console.log(document.forms["info1"]["pName"]);
    console.log(document.forms["info2"]["Credentials"]);
    console.log(document.forms["info3"]["NPI"]);
    console.log(document.forms["info4"]["Name"]);
    console.log(document.forms["info5"]["Age"]);
    console.log(document.forms["info6"]["Sex"]);
    console.log(document.forms["info7"]["ArrivalMode"]);
    console.log(document.forms["info8"]["ChiefComplaint"]);
    console.log(document.forms["info9"]["PainLocation"]);
    console.log(document.forms["info10"]["Story"]);
    console.log(document.forms["info11"]["PainSeverity"]);
    console.log(document.forms["info12"]["PainQuality"]);
    console.log(document.forms["info13"]["ModifyingFactors1"]);
    console.log(document.forms["info14"]["ModifyingFactors2"]);
    console.log(document.forms["info15"]["Distress"]);

    let x = "This is " + document.forms["info1"]["pName"].value + " " + document.forms["info2"]["Credentials"].value + " (" +
        document.forms["info3"]["NPI"].value + ") dictating on " + document.forms["info4"]["Name"].value + ", a " + document.forms["info5"]["Age"].value + " year old " + document.forms["info6"]["Sex"].value + " who arrived via " + document.forms["info7"]["ArrivalMode"].value + ". The patient arrived with the chief complaint of " + document.forms["info8"]["ChiefComplaint"].value + document.forms["info9"]["PainLocation"].value + document.forms["info10"]["Story"].value + " The patient rates their current pain as a " + document.forms["info11"]["PainSeverity"].value + document.forms["info12"]["PainQuality"].value + " pain, that " + document.forms["info13"]["ModifyingFactors1"].value + document.forms["info14"]["ModifyingFactors2"].value + " The patient states that there are no associated symptoms that began about the same time. Patient appears well developed and nourished. Patient appears in " + document.forms["info15"]["Distress"].value;
    document.getElementById("presentation").innerHTML = x;

    let y = '';
    switch (document.getElementById("ChiefComplaint").value) {
        case 'visual disturbances.':
            y = 'The patient was administed a standard visual exam after expressing concerns of an acute onset unspecified visual disturbances. Due to the nature of these disturbances, it is suspected to be bacterial. Subsequently, The patient was administered Cetrifaxone to attempt to eliminate all visual disturbances for potential bacteria infection.';
            break;

        case 'a Laceration,':
            y = 'The area was prepped and draped in the usual sterile fashion. Local anesthesia was achieved using Lidocaine 1% with epinephrine. The wound was copiously irrigated. 6 3-0 Nylon interrupted sutures were placed. Estimated blood loss was less than 0.5 mL. A dressing was applied to the area and post-procedure care, was explained. Return precautions are given. The patient tolerated the procedure well without complications.';
            break;

        case 'a Laceration With Foreign Body,':
            y = 'The area was prepped and draped in the usual sterile fashion. Local anesthesia was achieved using Lidocaine 1% with epinephrine. The stockinette was reflected and the area was cleansed with a wet and dry sponge. There was noted to be some remaining periwound erythema. Upon inspection of the wound, there was noted to be foreign filling substance deep within the wound. The entry site from the foreign body was extended proximally approximately about 0.5 cm. At this time, a foreign body was visualized and removed with a straight stat. The area was carefully inspected for any remaining piece of foreign body. The area was palpated and there was no more remaining foreign body noted. There was no purulent drainage expressed. Area was flushed with copious amounts of sterile saline. Pulse lavage was performed with 3 liters of plain sterile saline. Wound cultures were obtained. The wound was then again inspected for any remaining foreign body or purulent drainage. None was noticed. 6 3-0 Nylon interrupted sutures were placed. Estimated blood loss was less than 0.7 mL. A dressing was applied to the area and post-procedure care, was explained. Return precautions are given. The patient tolerated the procedure well without complications.';
            break;

        case 'a Head Injury.':
            y = 'There was no loss of consciousness. Patient was able to walk without assistance throughout the emergency department. Laboratory data shows elevated creatinine of 1.3. Urine is within normal. Urinalysis showing no signs of infection. Head CT has no significant intracranial pathology. No mass shift, bleed or fracture. A 12-lead, reviewed by myself, noting normal sinus rhythm, normal axis rates of 90. No significant ST-T wave changes. Administered Acetaminophen for pain. Return precautions are given. Patient to D/C home.';
            break;

        case 'a severe Head Injury.':
            y = 'Patient experienced episodes of diplopia and a syncopal episode. Patient was not able to walk without assistance throughout the emergency department. Laboratory data shows elevated creatinine of 1.35. Urine is within normal ranges. Urinalysis showing no signs of infection. Head CT has no significant intracranial pathology. No mass shift, bleed or fracture. A 12-lead notes normal sinus rhythm, normal axis rates of 90. No significant ST-T wave changes. Attending adminstered Zofran for nausea relief and Ibuprofen to combat inflammation. A mental status exam was conducted and patient appears oriented in all 3 spheres. Return precautions are given. Patient to D/C home.';
            break;

        case 'an Arm Injury.':
            y = 'X-rays revealed no fractures and good alignment. Patient was administered Acetaminophen for pain. Return precautions are given. Patient to D/C home without complications.';
            break;

        case 'a Leg Injury.':
            y = 'X-rays revealed no fractures and good alignment. Patient was administered Acetaminophen for pain. Return precautions are given. Patient to D/C home without complications.';
            break;

        case 'a severe Arm Injury.':
            y = 'X-rays revealed a fracture with poor alignment. Patient was administered Morphine for pain. Patient was started on fluids, 0.9 normal saline at 100mL per hour. Conscious sedation was achieved via propofol administered by the emergency department staff. Afterwards, traction with re-creation of the injury pattern was utilized to achieve reduction of the patients fracture. This was confirmed with an image intensifier. Subsequently, the patient was placed into a splint. The patient was aroused from conscious sedation and at this time and it was noted that the patient had full sensation. Post-reduction x-rays revealed good alignment. The lateral x-rays also revealed an adequate reduction. The patients pain is managed with medication, and at this time, we will allow the patient to be discharged home.';
            break;

        case 'a severe Leg Injury.':
            y = 'X-rays revealed multiple hairline fractures and good alignment. The patient was administered Morphine for pain and placed into a splint. Return precautions are given. Follow up care has been coordinated. Patient to D/C home without complications.';
            break;

        case 'a Gun Shot Wound,':
            y = 'The area was prepped and draped in the usual sterile fashion. Local anesthesia was achieved using Lidocaine 1% with epinephrine. The wound was copiously irrigated. Patient transported to operating room. An IV was instituted in the preoperative holding area. The patient was transported to the operating room and placed on the operating table in a supine position with a safety strap across the lap. General anesthesia was administered. The area was then prepped and draped in the usual sterile orthopedic fashion. The stockinette was reflected and the thorax was cleansed with a wet and dry sponge. There was noted to be some remaining periwound erythema. There was noted to be some mild crepitation about 2cm proximal from the entry wound. Upon inspection of the wound, there was noted to be hard foreign filling substance deep within the wound. The entry site from the foreign body was extended proximally about 0.5 cm. At this time, a large foreign body was visualized and removed with a straight stat. The area was carefully inspected for any remaining piece of foreign body. The area was palpated and there was no more remaining foreign body noted. There was no purulent drainage expressed. Area was flushed with copious amounts of sterile saline. Pulse lavage was performed with 3 liters of plain sterile saline. Wound cultures were obtained, aerobic and aerobic. The wound was then again inspected for any remaining foreign body or purulent drainage. None was noticed at this time. The wound was packed with sterile new gauze, and dressings consisted of 4x4s, ABDs, Kling, and Kerlix. The patient tolerated the above procedure and anesthesia well without complications. Patient is to D/C home after observation. Return precautions were given.';
            break;

        case 'a Puncture Wound,':
            y = 'The area was prepped and draped in the usual sterile fashion. Local anesthesia was achieved using Lidocaine 1% with epinephrine. The wound was copiously irrigated. Patient transported to operating room. An IV was instituted in the preoperative holding area. The patient was transported to the operating room and placed on the operating table in a supine position with a safety strap across the lap. General anesthesia was administered. The area was then prepped and draped in the usual sterile orthopedic fashion. The stockinette was reflected and the thorax was cleansed with a wet and dry sponge. There was noted to be some remaining periwound erythema. There was noted to be some mild crepitation about 2cm proximal from the entry wound. Upon inspection of the wound, there was noted to be no foreign body within the wound. The area was flushed with copious amounts of sterile saline. Pulse lavage was performed with 3 liters of plain sterile saline and wound cultures were obtained. The wound was then again inspected for purulent drainage or any foreign body. None was noticed. The wound was packed with sterile new gauze, and dressings consisted of 4x4s, ABDs, Kling, and Kerlix. The patient tolerated the above procedure and anesthesia well without complications.';
            break;

        case 'Chest Pain,':
            y = 'Patient was started on fluids, 0.9 normal saline at 100 mL per hour. Myoglobin, CK-MB mass, Trop. T, and Top. I all within normal limits. Chest x-ray appears normal. Electrocardiogram shows normal sinus rhythm with no acute ST or T-wave segment changes. There were no acute changes seen on the electrocardiogram. O2 saturation is 99%. Patient under observation until symptoms subside. The patient received Nitroglycerin. The patients pain is managed with medication.The patient states there is complete relief of his chest pain. Return precautions are given. Patient is to DC home after observation. Return precautions were given.';
            break;

        case 'severe chest pain,':
            y = 'Patient was started on fluids, 0.9 normal saline at 100 mL per hour. Patient was administered an electrocardiogram within 5mins of the emergency department stay. Readings show symptoms of an ST segment elevation myocardial infarction. O2 saturation is at 97%. The patient was administered Aspirin and Nitroglycerin. The patient was placed on continuous monitoring through their emergency department stay. After further evaluation, Benazepril was administered. The patients symptoms during their emergency department stay appear to be alleviating. The patient is to follow up with a cardiologist tomorrow morning. Patient to DC home without complications. Return precautions were given.';
            break;

        case 'a Syncopal Episode.':
            y = 'Patient was started on fluids, 0.9 normal saline at 100 mL per hour. CBC, minor chemistry, cardiac enzymes, E7, Troponin, and D-Dimer, all within normal limits. Head CT appears normal. Electrocardiogram shows normal sinus rhythm with no acute ST or T-wave segment changes. Patient was monitored during their ED stay and awoke not long after arrival. No artificial pressers were required. Patient is cleared to D/C home.';
            break;

        case 'a Burn,':
            y = 'An IV was instituted and the patient was started on fluids, 0.9 normal saline at 100ml per hour. The patient was applied standard burn lotion. The patient was administered morphine for pain and the patients pain is currently controlled by medication. The patient seems to be more comfortable after the administration of the topical medication. The patients burns were wrapped with gauze and aftercare was explained. Return precautions were given and the patient is to DC home.';
            break;

        case 'Abdominal Pain.':
            y = 'Patient was started on fluids, 0.9 normal saline at 100mL per hour. CBC, minor chemistry, Hepatic Function, Amylase and Lipase are all within normal limits. Abdominal CT appears normal. Electrocardiogram shows normal sinus rhythm with no acute ST or T-wave segment changes. Patient was administered Morphine for pain. Return precautions are given. Patient to D/C home.';
            break;

        case 'male genital pain.':
            y = 'NEEDS NOTE';
            break;

        case 'a Mild Allergic Reaction.':
            y = 'Upon arrival to the emergency department the patients airway was inspected and determined clear of any foreign body. The patient was however experiencing symptoms of an unspecified allergic reaction. Epinephrine was administered within the first 10mins of the emergency department stay. Patient was administered diphenhydramine and ibuprofen to alleviate symptoms. After monitoring the patient their symptoms began to subside and they are cleared to discharge home with complications. A follow up to see an allergist has been scheduled.';
            break;

        case 'a Severe Allergic Reaction.':
            y = 'Upon arrival to the emergency department the patients airway was inspected and determined clear of any foreign body. The patient was however experiencing symptoms of anaphylactic shock. Epinephrine was administered within the first 10mins of the emergency department stay. Patient was administered diphenhydramine and ibuprofen to alleviate symptoms. After monitoring the patient their symptoms began to subside and they are cleared to discharge home with complications. A follow up to see an allergist has been scheduled.';
            break;

        case 'a Motor Vehicle Collision.':
            y = 'The patient was removed from the backboard within the first half hour of the emergency department stay. The patient has no significant bony deformities or abnormalities. The patient was given a dose of Tylenol here in the emergency department for treatment of pain. The patients CT scans of the abdomen appeared normal. There are no signs of bleeding. I believe, there is just a contusion and abrasion to the abdomen from the seat belt, and likely from the airbag as well. The patients pain is controlled and they are feeling more comfortable. The patient is able to stand and walk through the emergency department without difficulty.';
            break;

        case 'a significant Motor Vehicle Collision.':
            y = 'The patient was removed from the backboard within the first half hour of the emergency department stay. The patient has significant bony deformities and abnormalities. The patient was given a dose of Morphine here in the emergency department for treatment of pain. CT scans of the abdomen showed no abnormalities. X-ray results for the thorax were also normal. However, upon my review, the patients X-ray results for the left arm revealed a significant fracture with poor alignment. The patient also suffered bilateral contusions and lacerations on all extremities. After a thorough examination of the lacerations on the arms and legs, the affected areas were prepped and draped following standard sterile protocols. Local anesthesia was achieved using Lidocaine 1% with epinephrine. The wounds were then thoroughly irrigated. To close the lacerations, a total of 11 interrupted sutures made of 3-0 Nylon were placed. Estimated blood loss was minimal, less than 0.9 mL. X-rays revealed a fracture with poor alignment. Patient was administered Morphine for pain. Patient was started on fluids, 0.9 normal saline at 100mL per hour. Conscious sedation was achieved via propofol administered by the emergency department staff. Afterwards, traction with re-creation of the injury pattern was utilized to achieve reduction of the patients fracture. This was confirmed with an image intensifier. Subsequently, the patient was placed into a splint. The patient was aroused from conscious sedation and at this time and it was noted that the patient had full sensation. Post-reduction x-rays revealed good alignment. The lateral x-rays also revealed an adequate reduction. A dressing was applied to the treated areas, and post-procedure care instructions were provided to the patient. The patient is to be discharged home and follow up with a physical therapist 3 times a week.';
            break;

        case 'a Motor Vehicle Collision vs a Pedestriant (hit by a car).':
            y = 'The patient was brought to the emergency department (ED) after being hit by a car. Within the first half hour of their ED stay, the patient was safely removed from the backboard. Upon examination, significant bony deformities and abnormalities were observed. To address the patients pain, a dose of Morphine was administered during their stay in the ED. CT scans of the abdomen showed no abnormalities. X-ray results for the thorax were also normal. However, upon my review, the patients X-ray results for the left arm revealed a significant fracture with poor alignment. The patient also suffered bilateral contusions and lacerations on all extremities. After a thorough examination of the lacerations on the arms and legs, the affected areas were prepped and draped following standard sterile protocols. Local anesthesia was achieved using Lidocaine 1% with epinephrine. The wounds were then thoroughly irrigated. To close the lacerations, a total of 11 interrupted sutures made of 3-0 Nylon were placed. Estimated blood loss was minimal, less than 0.9 mL. X-rays revealed a fracture with poor alignment. Patient was administered Morphine for pain. Patient was started on fluids, 0.9 normal saline at 100mL per hour. Conscious sedation was achieved via propofol administered by the emergency department staff. Afterwards, traction with re-creation of the injury pattern was utilized to achieve reduction of the patients fracture. This was confirmed with an image intensifier. Subsequently, the patient was placed into a splint. The patient was aroused from conscious sedation and at this time and it was noted that the patient had full sensation. Post-reduction x-rays revealed good alignment. The lateral x-rays also revealed an adequate reduction. A dressing was applied to the treated areas, and post-procedure care instructions were provided to the patient. The patient is to be discharged home and follow up with a physical therapist 3 times a week.';
            break;

        default:
            y = '';
    }

    document.getElementById('procedure').innerHTML = y;

    let Z = '';
    switch (document.getElementById("ChiefComplaint").value) {
        case 'visual disturbances.':
            z = 'H53.10 (Unspecified subjective visual disturbances)';
            break;

        case 'a Laceration,':
            z = 'S51.81 (Laceration without foreign body)';
            break;

        case 'a Laceration With Foreign Body,':
            z = 'S51.82 (Laceration with foreign body)';
            break;

        case 'a Head Injury.':
            z = 'S09.90XA (Unspecified injury of head, initial encounter)';
            break;

        case 'a severe Head Injury.':
            z = 'S06.0X9 (Concussion with loss of consciousness of unspecified duration)';
            break;

        case 'an Arm Injury.':
            z = 'S49.80 (Other specified injuries of shoulder and upper arm, unspecified arm)';
            break;

        case 'a Leg Injury.':
            z = 'S79.829A (Other specified injuries of unspecified thigh, initial encounter)';
            break;

        case 'a severe Arm Injury.':
            z = 'S52.323A (Displaced transverse fracture of shaft of unspecified radius, initial encounter for closed fracture)';
            break;

        case 'a severe Leg Injury.':
            z = 'S82.226 (Nondisplaced transverse fracture of shaft of unspecified tibia)';
            break;

        case 'a Gun Shot Wound,':
            z = 'S21.94XA (Puncture wound with foreign body of unspecified part of thorax, initial encounter)';
            break;

        case 'a Puncture Wound,':
            z = 'S21.94 (Puncture wound with foreign body of unspecified part of thorax)';
            break;

        case 'Chest Pain,':
            z = 'Z03.89 (Encounter for observation for other suspected diseases and conditions ruled out)';
            break;

        case 'severe chest pain,':
            z = 'I21.11 (ST elevation myocardial infarction involving right coronary artery (STEMI))';
            break;

        case 'a Syncopal Episode.':
            z = 'R55 (Syncope and collapse)';
            break;

        case 'a Burn,':
            z = 'T22.019A (Burn of unspecified degree of unspecified forearm, initial encounter)';
            break;

        case 'Abdominal Pain.':
            z = 'R10.84 (Generalized abdominal pain)';
            break;

        case 'male genital pain.':
            z = 'N50.8 (Other specified disorders of male genital organs)';
            break;

        case 'a Mild Allergic Reaction.':
            z = 'T78.40 (Allergy, unspecified)';
            break;

        case 'a Severe Allergic Reaction.':
            z = 'T78.2XXA  (Anaphylactic shock, unspecified, initial encounter)';
            break;

        case 'a Motor Vehicle Collision.':
            z = 'V49.69 (Unspecified car occupant injured in collision with other motor vehicles in traffic accident)';
            break;

        case 'a significant Motor Vehicle Collision.':
            z = 'V49.69 (Unspecified car occupant injured in collision with other motor vehicles in traffic accident)';
            break;

        case 'a Motor Vehicle Collision vs a Pedestriant (hit by a car).':
            z = 'V02.10 (Pedestrian on foot injured in collision with two- or three-wheeled motor vehicle in traffic accident)';
            break;

        default:
            z = '';
    }

    document.getElementById('diagnosis').innerHTML = z;



    let o = '';
    switch (document.getElementById("ChiefComplaint").value) {
        case 'visual disturbances.':
            o = '- Cetrifaxone (Oral administration). <br />- Standard visual exam.';
            break;

        case 'a Laceration,':
            o = '- Lidocaine 1% With Epinephrine Injection <br />- Simple Laceration Repair';
            break;

        case 'a Laceration With Foreign Body,':
            o = '- Lidocaine 1% With Epinephrine Injection <br />- Intermediate Laceration Repair';
            break;

        case 'a Head Injury.':
            o = '- Urinary Drug Screen <br />- Blood Urea Nitrogen <br />- CT Angio Head With Contrast <br />- Electrocardiogram, routine ECG with at least 12-leads <br />- Acetaminophen 1000mg';
            break;

        case 'a severe Head Injury.':
            o = '- Urinary Drug Screen <br />- Blood Urea Nitrogen <br />- CT Angio Head With Contrast <br />- Electrocardiogram, routine ECG with at least 12-leads <br />- Zofran 4mg Intravenous Injection <br />-Ibuprofen 600mg <br />- Mental Status Exam';
            break;

        case 'an Arm Injury.':
            o = '- X-Ray Forearm 2V <br />- Acetaminophen 1000mg';
            break;

        case 'a Leg Injury.':
            o = '- X-Ray Tibia/Fibia 2V <br />- Acetaminophen 1000mg';
            break;

        case 'a severe Arm Injury.':
            o = '- Sodium Chloride 0.9% 1000ml KCl 100 ml/hr IV <br />- Propofol 25ml/hr <br />- X-Ray Forearm 2 Views';
            break;

        case 'a severe Leg Injury.':
            o = '- X-Ray Tibia/Fibia 2V <br />- Morphine 0.4 mg/kg via slow IV injection';
            break;

        case 'a Gun Shot Wound,':
            o = '- Lidocaine 1% With Epinephrine Injection <br />- Ketamine 2.5 mg slow IV <br />- Exploration of penetrating extremity wound';
            break;

        case 'a Puncture Wound,':
            o = '- Lidocaine 1% With Epinephrine Injection <br />- Ketamine 2.5 mg slow IV <br />- Exploration of penetrating extremity wound';
            break;

        case 'Chest Pain,':
            o = '- Electrocardiogram, routine ECG with at least 12-leads <br />- Sodium Chloride 0.9% 1000ml KCl 100 ml/hr IV <br />- Serum Myoglobin <br />- Creatine kinase-MB <br />- Cardiac-specific Troponin I and Troponin T <br />- X-Ray Chest 2V <br />- Nitroglycerin';
            break;

        case 'severe chest pain,':
            o = '- Electrocardiogram, routine ECG with at least 12-leads <br />- Sodium Chloride 0.9% 1000ml KCl 100 ml/hr IV <br />- Serum Myoglobin (Myoglobin) <br />- Creatine kinase-MB (CK-MB) <br />- Cardiac-specific Troponin I and Troponin T (Troponin) <br />- X-Ray Chest 2V <br />- Nitroglycerin <br />- Asprin <br />- Benazepril 10mg';
            break;

        case 'a Syncopal Episode.':
            o = '- Complete Blood Count (CBC) <br />- Minor Chemistry <br />- Cardiac Enzymes <br />- Basic Metabolic Panel (BMP)<br />- Fibrin degradation fragment test (D-Dimer) <br />- Cardiac-specific Troponin I and Troponin T (Troponin) <br />- CT Angio Head With Contrast <br />- Electrocardiogram, routine ECG with at least 12-leads';
            break;

        case 'a Burn,':
            o = '- Sodium Chloride 0.9% 1000ml KCl 100 ml/hr IV <br />- Dressings and/or debridement of partial-thickness burns';
            break;

        case 'Abdominal Pain.':
            o = '- Sodium Chloride 0.9% 1000ml KCl 100 ml/hr IV <br />- Complete Blood Count (CBC) <br />- Minor Chemistry <br />- Hepatic Function Panel <br />- Amylase and Lipase <br />- CT Abdomen Without Contrast <br />- Electrocardiogram, routine ECG with at least 12-leads <br />- Morphine 0.4 mg/kg via slow IV injection';
            break;

        case 'male genital pain.':
            o = 'NEEDS NOTE';
            break;

        case 'a Mild Allergic Reaction.':
            o = '- Intramuscular Epinephrine injection: 0.3 mg of 1:1000 concentration epinephrine solution. <br />- Continuously monitor the patients vital signs, including heart rate, blood pressure, respiratory rate, and oxygen saturation. <br />- Observe for any signs of worsening symptoms, such as increased swelling, difficulty breathing, or decreased level of consciousness.';
            break;

        case 'a Severe Allergic Reaction.':
            o = '- Intramuscular Epinephrine injection: 0.3 mg of 1:1000 concentration epinephrine solution. <br />- Continuously monitor the patients vital signs, including heart rate, blood pressure, respiratory rate, and oxygen saturation. <br />- Observe for any signs of worsening symptoms, such as increased swelling, difficulty breathing, or decreased level of consciousness.';
            break;

        case 'a Motor Vehicle Collision.':
            o = '- CT Abdomen Without Contrast <br />- Tylenol';
            break;

        case 'a significant Motor Vehicle Collision.':
            o = '-CT Abdomen Without Contrast <br />- Sodium Chloride 0.9% 1000ml KCl 100 ml/hr IV <br />- X-Ray Forearm 2V <br />- Lidocaine 1% With Epinephrine Injection <br />- Intermediate Laceration Repair';
            break;

        case 'a Motor Vehicle Collision vs a Pedestriant (hit by a car).':
            o = '-CT Abdomen Without Contrast <br />- Sodium Chloride 0.9% 1000ml KCl 100 ml/hr IV <br />- X-Ray Forearm 2V <br />- Lidocaine 1% With Epinephrine Injection <br />- Intermediate Laceration Repair';
            break;

        default:
            o = '';
    }

    document.getElementById('orders').innerHTML = o;
}