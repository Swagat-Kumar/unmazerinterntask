import './App.css';
import { Layout,Collapse } from 'antd';
const { Panel } = Collapse;
const { Header, Content } = Layout;
function callback(key) {
  console.log(key);
}

function App() {
  return (
    <div className="App">
       <Layout>
      <Header><h1 className="title">Frequently Asked Questions :</h1></Header>
      <Layout>
        <Content className="content">
          <Collapse onChange={callback} className="faqs">
            <Panel header="What is Corona Virus?" key="1">
              <p>Corona viruses are a large family of viruses which may cause illness
in animals or humans. In humans, several coronaviruses are known
to cause respiratory infections ranging from the common cold to more
severe diseases such as Middle East Respiratory Syndrome (MERS)
and Severe Acute Respiratory Syndrome (SARS). The most recently
discovered coronavirus causes coronavirus disease COVID-19. </p>
            </Panel>
            <Panel header="What is COVID-19?" key="2">
              <p>COVID-19 is the infectious disease caused by the most recently
discovered corona virus. This new virus and disease were unknown
before the outbreak began in Wuhan, China, in December 2019. </p>
            </Panel>
            <Panel header="What are the symptoms of COVID-19?" key="3">
              <p>The most common symptoms of COVID-19 are fever, tiredness, and
dry cough. Some patients may have aches and pains, nasal
congestion, runny nose, sore throat or diarrhea. These symptoms are
usually mild and begin gradually. Some people become infected but
don’t develop any symptoms and don't feel unwell. Most people
(about 80%) recover from the disease without needing special
treatment. Around 1 out of every 6 people who gets COVID-19
becomes seriously ill and develops difficulty breathing. Older people,
and those with underlying medical problems like high blood pressure,
heart problems or diabetes, are more likely to develop serious illness.
People with fever, cough and difficulty breathing should seek medical
attention. </p>
            </Panel>
            <Panel header="How does COVID-19 spread?" key="4">
                            <p>People can catch COVID-19 from others who have the virus. The
              disease can spread from person to person through small droplets from
              the nose or mouth which are spread when a person with COVID-19
              coughs or exhales. These droplets land on objects and surfaces
              around the person. Other people then catch COVID-19 by touching
              these objects or surfaces, then touching their eyes, nose or mouth.
              People can also catch COVID-19 if they breathe in droplets from a
              person with COVID-19 who coughs out or exhales droplets. This is
              why it is important to stay more than 1 meter (3 feet) away from a
              person who is sick.</p>
            <Collapse >
              <Panel header="Can the virus that causes COVID-19 be transmitted through the air? " key="1">
                <p>Studies to date suggest that the virus that causes COVID-19 is mainly
transmitted through contact with respiratory droplets rather than
through the air. See previous answer on “How does COVID-19
spread?” </p>
              </Panel>
              <Panel header="Can CoVID-19 be caught from a person who has no symptoms? 
" key="2">
                <p>The main way the disease spreads is through respiratory droplets
expelled by someone who is coughing. The risk of catching COVID-19
from someone with no symptoms at all is very low. However, many
people with COVID-19 experience only mild symptoms. This is
particularly true at the early stages of the disease. It is therefore
possible to catch COVID-19 from someone who has, for example, just
a mild cough and does not feel ill. </p>
              </Panel>
              <Panel header="Can I catch COVID-19 from the feces of someone with the disease? 
" key="3">
                <p>The risk of catching COVID-19 from the feces of an infected person
appears to be low. While initial investigations suggest the virus may
be present in feces in some cases, spread through this route is not a 
main feature of the outbreak. The ongoing research on the ways
COVID-19 is spread and will continue to share new findings. Because
this is a risk, however, it is another reason to clean hands regularly,
after using the bathroom and before eating. </p>
              </Panel>
            </Collapse>
            </Panel>
            <Panel header="What can I do to protect myself and prevent the spread of
disease?" key="5">
              <p>Protection measures for everyone
Stay aware of the latest information on the COVID-19 outbreak,
available on the national,state and local public health authority. Many
countries around the world have seen cases of COVID-19 and several
have seen outbreaks. Authorities in China and some other countries
have succeeded in slowing or stopping their outbreaks. However, the
situation is unpredictable so check regularly for the latest news.
You can reduce your chances of being infected or spreading COVID19 by taking some simple precautions:
• Regularly and thoroughly clean your hands with an alcoholbased hand rub or wash them with soap and water.
Why? Washing your hands with soap and water or using
alcohol-based hand rub kills viruses that may be on your hands.
• Maintain at least 1 metre (3 feet) distance between yourself and
anyone who is coughing or sneezing.
Why? When someone coughs or sneezes they spray small liquid
droplets from their nose or mouth which may contain virus. If you
are too close, you can breathe in the droplets, including the
COVID-19 virus if the person coughing has the disease.
• Avoid touching eyes, nose and mouth.
Why? Hands touch many surfaces and can pick up viruses.
Once contaminated, hands can transfer the virus to your eyes,
nose or mouth. From there, the virus can enter your body and
can make you sick.
• Make sure you, and the people around you, follow good
respiratory hygiene. This means covering your mouth and nose
with your bent elbow or tissue when you cough or sneeze. Then 
dispose of the used tissue immediately.
Why? Droplets spread virus. By following good respiratory
hygiene you protect the people around you from viruses such as
cold, flu and COVID-19.
• Stay home if you feel unwell. If you have a fever, cough and
difficulty breathing, seek medical attention and call in advance.
Follow the directions of your local health authority.
Why? National and local authorities will have the most up to date
information on the situation in your area. Calling in advance will
allow your health care provider to quickly direct you to the right
health facility. This will also protect you and help prevent spread
of viruses and other infections.
• Keep up to date on the latest COVID-19 hotspots (cities or local
areas where COVID-19 is spreading widely). If possible, avoid
traveling to places – especially if you are an older person or
have diabetes, heart or lung disease.
Why? You have a higher chance of catching COVID-19 in one of
these areas.
Protection measures for persons who are in or have recently visited (past
14 days) areas where COVID-19 is spreading
o Follow the guidance outlined above (Protection measures for
everyone)
o Self-isolate by staying at home if you begin to feel unwell, even
with mild symptoms such as headache, low grade fever (37.3 C
or above) and slight runny nose, until you recover. If it is
essential for you to have someone bring you supplies or to go
out, e.g. to buy food, then wear a mask to avoid infecting other
people.
Why? Avoiding contact with others and visits to medical facilities
will allow these facilities to operate more effectively and help
protect you and others from possible COVID-19 and other
viruses.
o If you develop fever, cough and difficulty breathing, seek
medical advice promptly as this may be due to a respiratory
infection or other serious condition. Call in advance and tell your
provider of any recent travel or contact with travelers.
Why? Calling in advance will allow your health care provider to
quickly direct you to the right health facility. This will also help to
prevent possible spread of COVID-19 and other viruses. </p>
            </Panel>
            <Panel header="How likely am I to catch COVID-19?" key="6">
              <p>The risk depends on where you are - and more specifically, whether
there is a COVID-19 outbreak unfolding there.
For most people in most locations the risk of catching COVID-19 is
still low. However, there are now places around the world (cities or
areas) where the disease is spreading. For people living in, or visiting,
these areas the risk of catching COVID-19 is higher. Governments
and health authorities are taking vigorous action every time a new
case of COVID-19 is identified. Be sure to comply with any local
restrictions on travel, movement or large gatherings. Cooperating with
disease control efforts will reduce your risk of catching or spreading
COVID-19.
COVID-19 outbreaks can be contained and transmission stopped, as
has been shown in China and some other countries. Unfortunately,
new outbreaks can emerge rapidly. It’s important to be aware of the
situation where you are or intend to go. 
</p>
            </Panel>
            <Panel header="Should I worry about COVID-19?" key="7">
              <p>Illness due to COVID-19 infection is generally mild, especially for
children and young adults. However, it can cause serious illness:
about 1 in every 5 people who catch it need hospital care. It is
therefore quite normal for people to worry about how the COVID-19
outbreak will affect them and their loved ones.
We can channel our concerns into actions to protect ourselves, our
loved ones and our communities. First and foremost among these
actions is regular and thorough hand-washing and good respiratory
hygiene. Secondly, keep informed and follow the advice of the local
health authorities including any restrictions put in place on travel,
movement and gatherings. </p>
            </Panel>
            <Panel header="Who is at risk of developing severe illness
?" key="8">
              <p>While we are still learning about how COVID-2019 affects people,
older persons and persons with pre-existing medical conditions (such
as high blood pressure, heart disease, lung disease, cancer or
diabetes) appear to develop serious illness more often than others. 
</p>
            </Panel>
            <Panel header="Are antibiotics effective in preventing or treating the COVID-19?
" key="9">
              <p>No. Antibiotics do not work against viruses, they only work on
bacterial infections. COVID-19 is caused by a virus, so antibiotics do
not work. Antibiotics should not be used as a means of prevention or
treatment of COVID-19. They should only be used as directed by a
physician to treat a bacterial infection.</p>
            </Panel>
            <Panel header="Are there any medicines or therapies that can prevent or cure
COVID-19?
" key="10">
              <p>While some western, traditional or home remedies may provide
comfort and alleviate symptoms of COVID-19, there is no evidence
that current medicine can prevent or cure the disease. We does not
recommend self-medication with any medicines, including antibiotics,
as a prevention or cure for COVID-19. However, there are several
ongoing clinical trials that include both western and traditional
medicines. We will continue to provide updated information as soon
as clinical findings are available.</p>
            </Panel>
            <Panel header="Is there a vaccine drug or treatment for COVID-19?" key="11">
              <p>Not yet. To date, there is no vaccine and no specific antiviral medicine
to prevent or treat COVID-2019. However, those affected should
receive care to relieve symptoms. People with serious illness should
be hospitalized. Most patients recover thanks to supportive care. 
Possible vaccines and some specific drug treatments are under
investigation. They are being tested through clinical trials.

</p>
            </Panel>
          </Collapse>
        </Content>
      </Layout>
    </Layout>
    </div>
  );
}

export default App;
