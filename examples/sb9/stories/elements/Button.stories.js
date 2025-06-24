export default {
  title: 'Elements/Button'
}

const Template = ({ label }) => {
  return `<button>${label}</button>`
}

export const Active = Template.bind({})
Active.args = {
  label: 'Active Button'
}
Active.parameters = {
  docs: {
    description: {
      story: 'Button for triggering actions.'
    },
    source: {
      language: 'html',
      code: `<button id="send">Send</button>
<script>
const send = document.getElementById('send')
send.addEventListener('click', function send() {
  ...
})
</script>`
    }
  }
};

export const Default = Template.bind({})
Default.args = {
  label: 'Default Button'
}
