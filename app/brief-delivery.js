export async function deliverBrief(endpoint, payload) {
  try {
    const response = await fetch(endpoint, {
      method: 'POST', headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload), signal: AbortSignal.timeout(15000),
    });
    const data = await response.json().catch(() => null);
    if (!response.ok || data?.ok !== true) throw new Error(data?.message || 'Отправка временно недоступна. Ответы остались в анкете.');
  } catch (error) {
    if (error instanceof Error && error.name === 'Error') throw error;
    throw new Error('Не удалось подтвердить доставку. Ответы остались в анкете. Попробуйте позже.');
  }
}
