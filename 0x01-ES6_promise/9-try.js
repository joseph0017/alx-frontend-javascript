export default function guardrail(mathFunction) {
  const queue = [];
  const msg = 'Guardrail was processed';

  try {
    queue.push(mathFunction());
  } catch (error) {
    queue.push(error.toString());
  } finally {
    queue.push(msg);
  }
  return queue;
}
